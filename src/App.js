import React, { Component } from 'react';
import './App.css';
import QuizDashboard from './QuizDashboard';
import Question from './Question';
import Hint from './Hint';

import * as DataAPI from './utils/DataAPI'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    quizzes: {},
    questions: {},
    images:{},
  };

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  answeredQuestion = (answer) => {
    console.log('Question Answered', answer)
    if (answer.correct){
      this.state.quizzes[answer.quizId].answeredCorrectly.push(answer.questionId)
      DataAPI.questionCorrect(answer.quizId, answer.questionId)
    } else if (!answer.correct) {
      this.state.quizzes[answer.quizId].answeredIncorrectly.push(answer.questionId)
      DataAPI.questionIncorrect(answer.quizId, answer.questionId)
    }
    this.state.quizzes[answer.quizId].questionsLeft.shift();
    this.setState(this.state) // force React to update all child components
    DataAPI.questionAttempt(answer.questionId)
  }

  hintViewed = (question) => {
    this.state.questions[question].hintViewed = true;
    DataAPI.viewedHint(question)
  }

  resetQuestions = (quiz) => {
        for (const question of this.state.quizzes[quiz].questions){
        this.state.questions[question].hintViewed = false
        DataAPI.resetQuestion(question)
    }
  }

  resetQuiz = (quiz) =>{
    console.log('resetQuizFunction Called', quiz)
    this.state.quizzes[quiz].questionsLeft = this.state.quizzes[quiz].questions.slice()
    this.state.quizzes[quiz].answeredCorrectly=[]
    this.state.quizzes[quiz].answeredIncorrectly=[]
    this.resetQuestions(quiz)
    this.setState(this.state)
    DataAPI.resetQuiz(quiz)
  }


  componentDidMount(){
      DataAPI.getAllQuizzes()
        .then((quizzes) => {
          console.log("mount function before setState",quizzes);
          this.setState(() => ({
            quizzes
          }))
        });
        console.log("mount function after setState",this.state.quizzes);

      DataAPI.getAllQuestions()
        .then((questions) => {
          console.log("question mount function before setState",questions);
          this.setState(() => ({
            questions
          }))
        })
      console.log("questions",this.state.questions);

      let images = this.importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/))
      this.setState(() => ({
        images
      }))

    };

  render() {
    console.log('App.js called, state = ',this.state)
    return (
      <div>

          <Route exact path='/' render={()=>(
            <QuizDashboard
              quizzes={this.state.quizzes}
           />
         )}/>

         <Route exact path='/quiz' render={({location})=>{
           let image ={}
           if (this.state.questions[this.state.quizzes[location.state.quizId].questionsLeft[0]]){
             image=this.state.images[this.state.questions[this.state.quizzes[location.state.quizId].questionsLeft[0]].image]
           } else {
             image=this.state.images['endOfQuiz.png']
           }
           return (
             <Question
              quizId = {location.state.quizId}
              quiz = {this.state.quizzes[location.state.quizId]}
              question = {this.state.questions[this.state.quizzes[location.state.quizId].questionsLeft[0]]}
              // images={this.state.images}
              image = {image}
              answeredQuestion = {this.answeredQuestion}
            />
          )}}/>

           <Route exact path='/quiz/hint' render={({location})=>{
             console.log('hitn view', location.state.question)
             this.hintViewed(location.state.question.id)
             return(
               <Hint
                quizId = {location.state.quizId}
                question = {location.state.question}
                />
             )
          }}/>

        <Route exact path='/quiz/reset'
          componentWillMount={()=>{console.log('Entered redirect function onEnter')}}
          // onEnter = {({location})=> {
          //   console.log('route path onEnter called', location)
          //   this.resetQuiz(location.state.quizId)}}
          render={({location})=> {
            console.log('Entered redirect function -render', location)
            this.resetQuiz(location.state.quizId)

          return (
            <Redirect to = {{
              pathname:"/quiz",
              state:{
                quizId:location.state.quizId,
              }
            }}
            />
          )}}/>

       </div>

    );
  };
}

export default App;

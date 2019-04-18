import React, { Component } from 'react';
import './App.css';
import QuizDashboard from './QuizDashboard';
import Quiz from './Quiz';

import * as DataAPI from './utils/DataAPI'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class App extends Component {

  state = {
    quizzes: {},
    questions: {},
    images:{},
  };

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack (part 1 of 2)
  importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  answeredQuestion = (answer) => {
    console.log('Question Answered', answer)
    this.setState((currentState)=>{
      if (answer.correct){
        currentState.quizzes[answer.quizId].answeredCorrectly.push(answer.questionId)
        DataAPI.questionCorrect(answer.quizId, answer.questionId)
      } else if (!answer.correct) {
        currentState.quizzes[answer.quizId].answeredIncorrectly.push(answer.questionId)
        DataAPI.questionIncorrect(answer.quizId, answer.questionId)
      }
      currentState.quizzes[answer.quizId].questionsLeft.shift();
      return (currentState)
    })
    DataAPI.questionAttempt(answer.questionId)
  }

  hintViewed = (question) => {
    this.setState((currentState)=>{
        currentState.questions[question].hintViewed = true;
        return(currentState)
    })
    DataAPI.viewedHint(question)
  }

  resetQuestions = (quiz) => {
    this.setState((currentState) => {
      for (const question of currentState.quizzes[quiz].questions){
        currentState.questions[question].hintViewed = false
        DataAPI.resetQuestion(question)
      }
      return (currentState)
    })
  }

  resetQuiz = (quiz) =>{
    console.log('resetQuiz function called for:', quiz)
    this.setState((currentState) => {
      currentState.quizzes[quiz].questionsLeft = currentState.quizzes[quiz].questions.slice()
      currentState.quizzes[quiz].answeredCorrectly=[]
      currentState.quizzes[quiz].answeredIncorrectly=[]
      return (currentState)
    })

    this.resetQuestions(quiz)

    DataAPI.resetQuiz(quiz)
  }


  componentDidMount(){
      DataAPI.getAllQuizzes()
        .then((quizzes) => {
          // console.log("mount function before setState",quizzes);
          this.setState(() => ({
            quizzes
          }))
        });
        // console.log("mount function after setState",this.state.quizzes);

      DataAPI.getAllQuestions()
        .then((questions) => {
          // console.log("question mount function before setState",questions);
          this.setState(() => ({
            questions
          }))
        })
      // console.log("questions",this.state.questions);

// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack (part 2 of 2)
      let images = this.importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/))
      this.setState(() => ({
        images
      }))

    };

  render() {
    // console.log('App.js called, state = ',this.state)
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
             // conditions could be added for other images here. eg. low score etc.
           }
           return (
             <Quiz
              quizId = {location.state.quizId}
              quiz = {this.state.quizzes[location.state.quizId]}
              // question is first item in quiz.questionsLeft array
              // quiz page automatically updates 'question' as array is reduced
              question = {this.state.questions[this.state.quizzes[location.state.quizId].questionsLeft[0]]}
              image = {image}
              answeredQuestion = {this.answeredQuestion}
              hintViewed ={this.hintViewed}
              resetQuiz = {this.resetQuiz}
            />
          )}}/>

        <Route exact path='/quiz/reset'
          // this function was superceded by direct function call from buttonpress on QuizCompleted.js
          // but is still used on QuizCard.js

          // path ='quiz/hint' also superceded by 'state' on quiz.js due to probematic history navigation using browser 'back' button

          // onEnter never seems to be called, so resetQuiz is in render function
          // onEnter = {({location})=> {
          //   console.log('route path onEnter called, location)
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

import React, { Component } from 'react';
import './App.css';
import QuizDashboard from './QuizDashboard';
import Question from './Question';

import * as DataAPI from './utils/DataAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class App extends Component {

  state = {
    quizzes: {},
    questions: {}
  };

  answeredQuestion = (answer) =>{
    console.log(answer)
    if (answer.correct){
      this.state.quizzes[answer.quizId].answeredCorrectly.push(answer.questionId)
      DataAPI.questionCorrect(answer.quizId, answer.questionId)
    } else if (!answer.correct) {
      this.state.quizzes[answer.quizId].answeredIncorrectly.push(answer.questionId)
      DataAPI.questionIncorrect(answer.quizId, answer.questionId)
    }

    this.state.quizzes[answer.quizId].questionsLeft.shift();

    this.setState(this.state) // force React to update all child components

    console.log(this.state.quizzes)
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

    };

  render() {
    console.log('App.js called, state = ',this.state)
    console.log('App.js called, state = ',this)
    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <Link to={{pathname:'/'}} className="navbar-brand col-3 col-md-2 mr-0">Quizzes</Link>
        </nav>

        <div className="container">
          <Route exact path='/' render={()=>(
            <QuizDashboard
              quizzes={this.state.quizzes}
           />
         )}/>

         <Route exact path='/quiz' render={({location})=>(
           <Question
            quizId = {location.state.quizId}
            quiz = {this.state.quizzes[location.state.quizId]}
            quizName = {this.state.quizzes[location.state.quizId].name}
            question = {this.state.questions[this.state.quizzes[location.state.quizId].questionsLeft[0]]}
            answeredQuestion = {this.answeredQuestion}
            //some of these separated props are also carried within 'quiz'
          />
        )}/>
        </div>
      </div>
    );
  };
}

export default App;

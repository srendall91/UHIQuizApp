import React, { Component } from 'react';
import './App.css';
import QuizDashboard from './QuizDashboard';
import Question from './Question';

import * as DataAPI from './utils/DataAPI'
import { Route } from 'react-router-dom'

class App extends Component {

  state = {
    quizzes: {},
    questions: {}
  };

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
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a class="navbar-brand col-3 col-md-2 mr-0" href="/">Quizzes</a>
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
            question = {this.state.questions[location.state.questionId]}
            questionText = {this.state.questions[location.state.questionId]['questionText']}
          />
        )}/>
        </div>
      </div>
    );
  };
}

export default App;

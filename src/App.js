import React, { Component } from 'react';
import './App.css';
import QuizDashboard from './QuizDashboard';

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
    return (
      <div className="container">
        App.js: App class called
        <Route exact path='/' render={()=>(
          <QuizDashboard
            quizzes={this.state.quizzes}
         />
       )}/>
      </div>
    );
  };
}


export default App;

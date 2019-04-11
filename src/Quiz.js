import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Question from './Question';
import Hint from './Hint';
import Completed from './QuizCompleted';

class Quiz extends Component{
  state = {
    view: 'question'
  }

  // if (quiz.questionsLeft.length === 0){
  //   this.setState({view:'completed'})
  // } else {
  //   this.setState({view:'question'})
  // }

  componentDidMount=()=>{
    this.setState({view: 'question'})
  }

  viewHint = () => {
    console.log('hint button pushed')
    this.props.hintViewed(this.props.question.id);
    this.setState({view: 'hint'})
  }

  viewQuestion = () => {
    this.setState({view: 'question'})
  }

  render(){
    const { quizId, quiz, question, image, answeredQuestion, resetQuiz} = this.props
    console.log('\n quiz page',this)

    if (this.state.view ==='question'){
      if (question){
        return(
          <div>
             <Question
               quizId = {quizId}
               quiz = {quiz}
               question = {question}
               image = {image}
               answeredQuestion = {answeredQuestion}
               viewHint = {this.viewHint}
             />
          </div>
        )
      } else {
        return(
          <div>
             <Completed
               quizId = {quizId}
               quiz = {quiz}
               image = {image}
               resetQuiz = {resetQuiz}
             />
          </div>
        )}
    } else if (this.state.view ==='hint') {
      return(
        <div>
           <Hint
             quizId = {quizId}
             quiz = {quiz}
             question = {question}
             viewQuestion ={this.viewQuestion}
           />
        </div>
      )
    }
  }
}

export default Quiz

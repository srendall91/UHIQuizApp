import React, {Component} from 'react';

import Question from './Question';
import Hint from './Hint';
import Completed from './QuizCompleted';

class Quiz extends Component{
  state = {
    view: 'question'
  }

  componentDidMount=()=>{
    this.setState({view: 'question'})
  }

  viewHint = () => {
    console.log('hint button pushed')
    this.props.hintViewed(this.props.question.id);// mark question hint as 'viewed' in App.js[state]
    this.setState({view: 'hint'}) // view hint
  }

  viewQuestion = () => {
    this.setState({view: 'question'})
  }

  resetQuiz=()=>{
    this.props.resetQuiz(this.props.quizId)
  }

  render(){
    const { quizId, quiz, question, image, answeredQuestion } = this.props
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
               resetQuiz = {this.resetQuiz}
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

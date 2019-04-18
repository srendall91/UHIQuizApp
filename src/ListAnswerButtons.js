import React, {Component} from 'react'

import AnswerButton from './AnswerButton';


class ListAnswerButtons extends Component {

  answerPressed = (answer) =>{
    this.props.answerSelected(
     answer
   )
  }

  render(){
    return (
      <div className="row">
            {this.props.answers.map((answer)=>(
          <AnswerButton
            key = {answer.id}
            id = {answer.id}
            text = {answer.answerText}
            correct ={answer.correct}
            answerPressed = {this.answerPressed}
            />
      ))}
      </div>
    )
  }
}

export default ListAnswerButtons

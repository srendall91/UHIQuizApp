import React, {Component} from 'react'

import AnswerButton from './AnswerButton';


class ListAnswerButtons extends Component {

  render(){
    let answers = this.props.answers
    // let quizIds = Object.keys(quizzes)
    //let quizvalues = Object.values(quizzes)
    // console.log('quizzes', quizzes, '\ncomplete object, this',this,
    // '\nthis.props.quizzes', this.props.quizzes,
    // '\nquizIds', quizIds, '\nobject values' ,quizvalues)
    //
    // for (const quizId of quizIds){
    //   console.log('\nFor loop id',quizId, quizzes[quizId]);
    // }

    return (
      <div className="row">
      {answers.map((answer)=>(
          <AnswerButton
            key = {answer.id}
            text = {answer.answerText}
            correct ={answer.correct}
            />
      ))}
      </div>
    )
  }
}

export default ListAnswerButtons

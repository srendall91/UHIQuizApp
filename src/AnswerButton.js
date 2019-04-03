import React, {Component} from 'react'

class AnswerButton extends Component {

  render(){
    let answer = this.props
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
      <div className="col-md">
        <a href="#" key={answer.id} className="btn btn-secondary btn-block m-1 p-2">{answer.text}</a>
      </div>
    )
  }
}

export default AnswerButton

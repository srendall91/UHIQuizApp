import React, {Component} from 'react'

import QuizCard from './QuizCard';


class ListQuizzes extends Component {

  render(){
    let quizzes = this.props.quizzes
    let quizvalues = Object.values(quizzes)

    // other methods of accessing the acquired data object
    
    // let quizIds = Object.keys(quizzes)
    // console.log('quizzes', quizzes, '\ncomplete object, this',this,
    // '\nthis.props.quizzes', this.props.quizzes,
    // '\nquizIds', quizIds, '\nobject values' ,quizvalues)
    //
    // for (const quizId of quizIds){
    //   console.log('\nFor loop id',quizId, quizzes[quizId]);
    // }

    return (
      <div className="row">
      {quizvalues.map((quiz)=>(
          <QuizCard
            key = {quiz.id}
            quiz = {quiz}
            />
      ))}
      </div>
    )
  }
}

export default ListQuizzes

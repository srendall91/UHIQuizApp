import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import QuizCard from './QuizCard';


class ListQuizzes extends Component {

  render(){
    let quizzes = this.props.quizzes
    // let quizIds = Object.keys(quizzes)
    let quizvalues = Object.values(quizzes)
    // console.log('quizzes', quizzes, '\ncomplete object, this',this,
    // '\nthis.props.quizzes', this.props.quizzes,
    // '\nquizIds', quizIds, '\nobject values' ,quizvalues)
    //
    // for (const quizId of quizIds){
    //   console.log('\nFor loop id',quizId, quizzes[quizId]);
    // }

    return (
      <div className="row">
      ListQuizzes.js: App class called
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

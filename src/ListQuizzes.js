import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class ListQuizzes extends Component {

  render(){
    let quizzes = this.props.quizzes
    let quizIds = Object.keys(quizzes)
    let quizvalues = Object.values(quizzes)
    console.log('quizzes', quizzes, '\ncomplete object, this',this,
    '\nthis.props.quizzes', this.props.quizzes,
    '\nquizIds', quizIds, '\nobject values' ,quizvalues)

    for (const quizId of quizIds){
      console.log('\nFor loop id',quizId, quizzes[quizId]);
    }

    return (
      <div>
      {quizvalues.map((quiz)=>(
        <div key={quiz.id}>
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{quiz.name}</h5>
              <button
                type="button" className="btn btn-dark">X</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    )
  }
}

export default ListQuizzes

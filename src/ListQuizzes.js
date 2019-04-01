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
      <div className="row">

      {quizvalues.map((quiz)=>(
        <div key={quiz.id} className="col-sm-6 col-md-4">
					<div className="card m-2 text-center attempted">
						<div className="card-body">
							<h5 className="card-title ">{quiz.name}</h5>

								<div className="card-text">started:</div>
								<div className="card-text">{quiz.answeredCorrectly.length}/{quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length} correct so far</div>
                <div className="card-text mb-3">{quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length}/{quiz.questions.length} questions attempted</div>

							<a href="./complete.html" className="btn">Resume?</a>
						</div>
					</div>
				</div>
      ))}
      </div>
    )
  }
}

export default ListQuizzes

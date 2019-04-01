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
      <div class='row'>

      {quizvalues.map((quiz)=>(
        <div class="col-sm-6 col-md-4">
					<div class="card m-2 text-center attempted">
						<div class="card-body">
							<h5 class="card-title ">{quiz.name}</h5>
							<div class="row mt-3 mb-3 justify-content-center">
								<div class="col-auto card-text">completed:</div>
								<div class="col-auto card-text">{quiz.answeredCorrectly.length}/{quiz.questions.length} correct</div>
							</div>
							<a href="./complete.html" class="btn">Try again?</a>
						</div>
					</div>
				</div>
      ))}
      </div>
    )
  }
}

export default ListQuizzes

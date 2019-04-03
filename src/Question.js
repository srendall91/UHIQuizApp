import React, {Component} from 'react';

import ListAnswerButtons from './ListAnswerButtons'

class Question extends Component {

  answeredQuestion = (answer) =>{
    this.props.answeredQuestion({
      quizId: this.props.quizId,
      questionId: this.props.question.id,
      correct: answer.correct
    })
  }

  render(){
    const { quizId, quiz, quizName, question, questionText } = this.props

    console.log('question.js',this)
    console.log('\nquestion.id', question.id)
    // console.log('\nquestionText', questionText)
    // console.log('\nquestionAttempted', question.questionAttempted)

    return (
      <div className="container-fluid">
			<div className="row mt-3 mb-3">
				<div className="col-sm">
					<h3 className="text-center">{quizName}</h3>
				</div>
        <div className="col-sm">
					<h3 className="text-center">Question {quiz.questions.length-quiz.questionsLeft.length +1}
          /{quiz.questions.length}</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-sm">
					<div className="p-3 mb-2 bg-light">
							<p>{question.questionText}</p>
						<div className="text-center">
							<img className="mb-4 rounded img-fluid" src="http://i-want-to-study-engineering.org/figs/circle_intersection.png"/>
						</div>
					</div>
				</div>

				<div className="col-sm">
					<div className="p-3 mb-2 bg-light">
          <ListAnswerButtons
            answers = {question.answers}
            answerSelected = {this.answeredQuestion}
          />
				</div>
			</div>
		</div>
    </div>
    );
  }
}

export default Question

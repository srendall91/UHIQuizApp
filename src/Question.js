import React, {Component} from 'react';

import HeaderNav from './HeaderNav';
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
    const { quizId, quiz, question, image, viewHint } = this.props

    // console.log('question.js',this)

      let showHintLink = !question.hintViewed

      return (
        <div>
          <HeaderNav
            showHintLink = {showHintLink}
            viewHint = {viewHint}
            />
          <div className="container">
      			<div className="row mt-3 mb-3">
      				<div className="col-sm">
      					<h3 className="text-center">{quiz.name}</h3>
      				</div>
              <div className="col-sm">
      					<h5 className="text-center">Question {quiz.questions.length-quiz.questionsLeft.length +1}
                /{quiz.questions.length}</h5>
      				</div>
      			</div>
      			<div className="row">
      				<div className="col-sm">
      					<div className="p-3 mb-2 bg-light">
      							<p>{question.questionText}</p>
      						<div className="text-center">
      							<img className="mb-4 rounded img-fluid" src={image}/>
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
      </div>
    );

  }
}

export default Question

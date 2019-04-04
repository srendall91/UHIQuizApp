import React, {Component} from 'react';
import { Link } from 'react-router-dom'

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
    const { quizId, quiz, quizName, question, image, questionText } = this.props

    console.log('question.js',this)
    //console.log('\nquestion.id', question.id)
    // console.log('\nquestionText', questionText)
    // console.log('\nquestionAttempted', question.questionAttempted)

    if (question) {
      let imageURL = 'images/'+question.image
      console.log('imageurl', imageURL)
      return (
        <div className="container-fluid">
    			<div className="row mt-3 mb-3">
    				<div className="col-sm">
    					<h3 className="text-center">{quizName}</h3>
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
    );
  } else {
    return(
      <div className="container-fluid">
        <div className="row p-3">
  				<div className="col-sm">
            <h1 className="text-center">{quizName}</h1>
  					<h3 className="text-center">Quiz complete</h3>
  				</div>
  			</div>
  			<div className="row">
  				<div className="col-sm m-3 p-3 mb-2 bg-light text-center">
  							<p>Well done on completing the quiz</p>
  							<p>You scored {quiz.answeredCorrectly.length} out of {quiz.questions.length}</p>
  				</div>

  				<div className="col-sm">
  						<div className="row p-3 mb-2 justify-content-center">
  							<div className="col-4">
  								<Link to={{
                    pathname:'/quiz/reset',
                    state:{
                      quizId:quiz.id,
                    }
                  }}
                     className="btn btn-info">Try Again</Link>
  							</div>
  							<div className="col-4">
  								<Link to={{pathname:'/'}} className="btn btn-info">Main menu</Link>
  							</div>
  						</div>
  				</div>
        </div>
      </div>

  );

  }
  }
}

export default Question

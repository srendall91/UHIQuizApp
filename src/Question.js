import React, {Component} from 'react';
import { Link } from 'react-router-dom'

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
    const { quizId, quiz, question, image } = this.props

    console.log('question.js',this)
    //console.log('\nquestion.id', question.id)
    // console.log('\nquestionText', questionText)
    // console.log('\nquestionAttempted', question.questionAttempted)

    if (question) {
      let imageURL = 'images/'+question.image
      let showHintLink = !question.hintViewed

      console.log('imageurl', imageURL)
      return (
        <div>
        <HeaderNav
          quizId = {quizId}
          question = {question}
          showHintLink = {showHintLink}
          />
        <div className="container-fluid">
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
  } else {
    return(
      <div>
      <HeaderNav/>
      <div className="container-fluid">
        <div className="row p-3">
  				<div className="col-sm">
            <h1 className="text-center">{quiz.name}</h1>
  					<h3 className="text-center">Quiz complete</h3>
  				</div>
  			</div>
        <div className="row">
          <div className="col-sm col-md text-center">
            <img className="mb-4 rounded img-fluid max-width:50%" src={image}/>
          </div>

  				<div className="col-sm col-xs col-md text-center">
            <div className="row m-3 p-3 mb-2 bg-light text-center">
  							Well done on completing the quiz
                <br/>
  							You scored {quiz.answeredCorrectly.length} out of {quiz.questions.length}
  				  </div>
						<div className="row p-3 mb-2 justify-content-center">
							<div className="col-6 text-center">
								<Link to={{
                  pathname:'/quiz/reset',
                  state:{
                    quizId:quiz.id,
                  }
                }}
                   className="btn btn-info">Try Again</Link>
							</div>
							<div className="col-6 justify-content-center">
								<Link to={{pathname:'/'}} className="btn btn-info">Main menu</Link>
							</div>
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

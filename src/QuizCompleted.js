import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import HeaderNav from './HeaderNav';

class Completed extends Component{



  render(){

    const { quizId, quiz, question, image, resetQuiz } = this.props

    return(
      <div>
      <HeaderNav/>
      <div className="container">
        <div className="row p-3">
  				<div className="col-sm">
            <h1 className="text-center">{quiz.name}</h1>
  					<h3 className="text-center">Quiz complete</h3>
  				</div>
  			</div>
        <div className="row">
          <div className="col-sm col-xs col-md text-center">
            <img className="mb-4 rounded img-fluid max-width:50%" src={image}/>
          </div>

  				<div className="col-sm col-xs col-md text-center">
            <div className="row m-3 p-3 mb-2 bg-light justify-content-center">
  							Well done on completing the quiz
                <br/>
  							You scored {quiz.answeredCorrectly.length} out of {quiz.questions.length}
  				  </div>
						<div className="row p-3 mb-2 justify-content-center">
							<div className="col-6 text-center">
								<button
                   className="btn btn-info"
                   onClick ={resetQuiz}>
                   Try Again</button>

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

export default Completed

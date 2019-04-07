import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import HeaderNav from './HeaderNav';

class Hint extends Component {


  render(){
    const { quizId, question, showBackLink } = this.props

    return(
      <div>
        <HeaderNav
        quizId = {quizId}
        question = {question}
        showBackLink = {true}
        />
        <div className="container-fluid p-3">
    			<div className="card mb-3 text-center ">
    				<div className="card-body">
    					<h3 className="card-title ">Hint</h3>
    					<div className="row m-3">
    						<div className="card-text text-center">
    							{question.hint}
    						</div>
    					</div>
    					<div className="row justify-content-center">
              <Link to={{
                  pathname:'/quiz',
                    state:{
                      quizId: this.props.quizId,
                      question: this.props.question
                    }
                  }}
                 className="btn btn-info">
                Got it!
               </Link>
    					</div>
    				</div>
    			</div>
        </div>
		  </div>
    )

  }
}

export default Hint

import React, {Component} from 'react';

import HeaderNav from './HeaderNav';

class Hint extends Component {

  render(){
    const { quizId, question } = this.props

    return(
      <div>
        <HeaderNav
        quizId = {quizId}
        question = {question}
        showBackLink = {true}
        viewQuestion ={this.props.viewQuestion}
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
                <button
                   className="btn btn-info"
                   onClick = {this.props.viewQuestion}>
                 Got it!
                </button>
    					</div>
    				</div>
    			</div>
        </div>
		  </div>
    )

  }
}

export default Hint

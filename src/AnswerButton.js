import React, {Component} from 'react'

class AnswerButton extends Component {

  handleSubmit=()=>{
    this.props.answerPressed({
      id: this.props.id,
      correct: this.props.correct
    })
  }

  render(){
    return (
      <div>
        <ul>
          <button
            key={this.props.id}
            className="btn btn-secondary btn-block m-1 p-2"
            onClick={this.handleSubmit}
          >{this.props.text}
          </button>
        </ul>
      </div>
    )
  }
}

export default AnswerButton

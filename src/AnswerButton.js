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
      <div className="btn-block pr-2">
        <div>
          <button
            key={this.props.id}
            type="button"
            className="btn btn-secondary btn-block m-1 p-2"
            onClick={this.handleSubmit}
          >{this.props.text}
          </button>
        </div>
      </div>
    )
  }
}

export default AnswerButton

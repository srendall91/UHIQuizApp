import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class QuizCard extends Component {

  render(){
    let quiz = this.props.quiz
    let buttonText =''
    let cardClass ="card m-2 text-center attempted"
    let cardText =""
    console.log('quiz', quiz, '\ncomplete object, this',this)

      if (quiz.questionsLeft.length === 0) {
        buttonText = 'Try Again'
        cardClass += " completed"
        cardText = quiz.answeredCorrectly.length.toString()+" correct out of "+quiz.questions.length.toString()+" questions"
      } else if (quiz.questionsLeft.length === quiz.questions.length) {
        buttonText = 'Start'
        cardClass += " notStarted"
        cardText = quiz.questions.length.toString()+" questions"
      } else {
        buttonText = 'Resume'
        cardClass += " started"
        cardText = (quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length).toString()+" of "+
        quiz.questions.length.toString()+" questions attempted: "
        +quiz.answeredCorrectly.length.toString()+"correct so far"
      }


    return (
      <div key={quiz.id} className="col-sm-6 col-md-4">
        <div className={cardClass}>
          <div className="card-body">
            <h5 className="card-title ">{quiz.name}</h5>

              <div className="card-text mb-3">
                {cardText}
              </div>

            <Link to={{
              pathname:"/quiz",
              state:{
                quizId:quiz.id,
                // questionId:quiz.questionsLeft[0],
                // questionsLeft: quiz.questionsLeft
              }
            }}
            className="btn">{buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard

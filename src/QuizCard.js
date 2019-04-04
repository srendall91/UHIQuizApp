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
        return (
          <div key={quiz.id} className="col-sm-6 col-md-4">
            <div className="card m-2 text-center completed">
              <div className="card-body">
                <h5 className="card-title ">{quiz.name}</h5>
                  <div className="card-text mb-3">
                    {quiz.answeredCorrectly.length} correct out of {quiz.questions.length} questions
                  </div>

                <Link to={{
                  pathname:"/quiz",
                  state:{
                    quizId:quiz.id,
                  }
                }}
                className="btn">Try Again
                </Link>
              </div>
            </div>
          </div>
        )
      } else if (quiz.questionsLeft.length === quiz.questions.length) {
        return (
          <div key={quiz.id} className="col-sm-6 col-md-4">
            <div className="card m-2 text-center notStarted">
              <div className="card-body">
                <h5 className="card-title ">{quiz.name}</h5>
                  <div className="card-text mb-3">
                    {quiz.questions.length} questions
                  </div>

                <Link to={{
                  pathname:"/quiz",
                  state:{
                    quizId:quiz.id,
                  }
                }}
                className="btn">Start
                </Link>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div key={quiz.id} className="col-sm-6 col-md-4">
            <div className="card m-2 text-center started">
              <div className="card-body">
                <h5 className="card-title ">{quiz.name}</h5>
                  <div className="card-text mb-3">
                    {quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length} of {quiz.questions.length} questions attempted:
                    <br/>
                    {quiz.answeredCorrectly.length} correct so far
                  </div>

                <Link to={{
                  pathname:"/quiz",
                  state:{
                    quizId:quiz.id,
                  }
                }}
                className="btn">Resume
                </Link>
              </div>
            </div>
          </div>
        )

      }
    }
}

export default QuizCard

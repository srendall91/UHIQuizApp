import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class QuizCard extends Component {

  render(){
    let quiz = this.props.quiz
    console.log('quiz', quiz, '\ncomplete object, this',this)

    return (
      <div key={quiz.id} className="col-sm-6 col-md-4">
        <div className="card m-2 text-center attempted">
          <div className="card-body">
            <h5 className="card-title ">{quiz.name}</h5>

              <div className="card-text">started:</div>
              <div className="card-text">
                {quiz.answeredCorrectly.length}
                /{quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length}
                 correct so far</div>
              <div className="card-text mb-3">
                {quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length}
                /{quiz.questions.length} questions attempted
              </div>

            <Link to={{
              pathname:"/quiz",
              state:{
                quizId:quiz.id,
                questionId:quiz.questionsLeft[0]
              }
            }}
            className="btn">Resume?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard

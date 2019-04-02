import React, {Component} from 'react';

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

            <a href="#" className="btn">Resume?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard

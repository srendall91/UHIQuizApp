import React, {Component} from 'react';
import ListQuizzes from './ListQuizzes';
import HeaderNav from './HeaderNav';

class QuizDashboard extends Component {

  render(){

    return (
      <div>
      <HeaderNav
      />
      <div className="container">
        <ListQuizzes
            quizzes={this.props.quizzes}
         />
      </div>
      </div>
    );
  }
}

export default QuizDashboard

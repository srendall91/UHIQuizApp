import React, {Component} from 'react';
import ListQuizzes from './ListQuizzes';

class QuizDashboard extends Component {

  render(){
    let quizzes = this.props.quizzes
    let quizIds = Object.keys(quizzes)
    let quizvalues = Object.values(quizzes)
    console.log('quizzes', quizzes, '\ncomplete object, this',this,
    '\nthis.props.quizzes', this.props.quizzes,
    '\nquizIds', quizIds, '\nobject values' ,quizvalues)

    for (const quizId of quizIds){
      console.log('\nFor loop id',quizId, quizzes[quizId]);
    }

    return (
      <div className="container">
        QuizDashboard.js: App class called
        <ListQuizzes
            quizzes={this.props.quizzes}
         />
      </div>
    );
  }
}

export default QuizDashboard

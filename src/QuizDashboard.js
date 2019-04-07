import React, {Component} from 'react';
import ListQuizzes from './ListQuizzes';
import HeaderNav from './HeaderNav';

class QuizDashboard extends Component {

  render(){
    // let quizzes = this.props.quizzes
    // let quizIds = Object.keys(quizzes)
    // let quizvalues = Object.values(quizzes)
    // let questionvalues = Object.values(questions)
    // console.log('quizzes', quizzes, '\ncomplete object, this',this,
    // '\nthis.props.quizzes', this.props.quizzes,
    // '\nquizIds', quizIds, '\nobject values' ,quizvalues)
    //
    // for (const quizId of quizIds){
    //   console.log('\nFor loop id',quizId, quizzes[quizId]);
    // }

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

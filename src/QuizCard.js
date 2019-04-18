import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class QuizCard extends Component {

  render(){
    let quiz = this.props.quiz

    // console.log('quiz', quiz, '\ncomplete object, this',this)


    // slightly more compact but more complicated card formatting routine
    // based on user's progress through each quiz

    const completed = (quiz.questionsLeft.length === 0)
    const notStarted = (quiz.questionsLeft.length === quiz.questions.length)
    const started = (!(completed||notStarted))

    return (
      <div key={quiz.id} className="col-sm-6 col-md-6">
        <div className={(completed && 'card m-2 text-center completed')||
        (notStarted && "card m-2 text-center notStarted")||
        (started &&"card m-2 text-center started")}>
          <div className="card-body">
            <h5 className="card-title ">{quiz.name}</h5>

              {(completed && <div className="card-text mb-3">
                {quiz.answeredCorrectly.length} correct out of {quiz.questions.length} questions
              </div>)
              ||(notStarted && <div className="card-text mb-3">
                {quiz.questions.length} questions
              </div>)
              ||(started && <div className="card-text mb-3">
                {quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length} of {quiz.questions.length} questions attempted:
                  <br/>
                {quiz.answeredCorrectly.length} correct so far
              </div>)}

              {(completed && <Link to={{
                  pathname:"/quiz/reset",
                  state:{
                    quizId:quiz.id,
                  }
                }}
                className="btn">Try Again
                </Link>)||
              (notStarted && <Link to={{
                          pathname:"/quiz",
                          state:{
                            quizId:quiz.id,
                          }
                        }}
                        className="btn">Start
                        </Link>)||
              (started &&  <Link to={{
                          pathname:"/quiz",
                          state:{
                            quizId:quiz.id,
                          }
                        }}
                        className="btn">Resume
                      </Link>)}


          </div>
        </div>
      </div>
    )
    // less complicated but longer version of card formatting routine

      // if (quiz.questionsLeft.length === 0) {
      // return (
      //   <div key={quiz.id} className="col-sm-6 col-md-6">
      //     <div className= 'card m-2 text-center completed'>
      //       <div className="card-body">
      //         <h5 className="card-title ">{quiz.name}</h5>
      //           <div className="card-text mb-3">
      //             {quiz.answeredCorrectly.length} correct out of {quiz.questions.length} questions
      //           </div>}
      //
      //           <Link to={{
      //               pathname:"/quiz/reset",
      //               state:{
      //                 quizId:quiz.id,
      //               }
      //             }}
      //             className="btn">Try Again
      //             </Link>
      //       </div>
      //     </div>
      //   </div>
      // )
      // } else if (quiz.questionsLeft.length === quiz.questions.length) {
      //   return (
      //     <div key={quiz.id} className="col-sm-6 col-md-6">
      //       <div className="card m-2 text-center notStarted">
      //         <div className="card-body">
      //           <h5 className="card-title ">{quiz.name}</h5>
      //             <div className="card-text mb-3">
      //               {quiz.questions.length} questions
      //             </div>
      //
      //           <Link to={{
      //             pathname:"/quiz",
      //             state:{
      //               quizId:quiz.id,
      //             }
      //           }}
      //           className="btn">Start
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // } else {
      //   return (
      //     <div key={quiz.id} className="col-sm-6 col-md-6">
      //       <div className="card m-2 text-center started">
      //         <div className="card-body">
      //           <h5 className="card-title ">{quiz.name}</h5>
      //             <div className="card-text mb-3">
      //               {quiz.answeredCorrectly.length+quiz.answeredIncorrectly.length} of {quiz.questions.length} questions attempted:
      //               <br/>
      //               {quiz.answeredCorrectly.length} correct so far
      //             </div>
      //
      //           <Link to={{
      //             pathname:"/quiz",
      //             state:{
      //               quizId:quiz.id,
      //             }
      //           }}
      //           className="btn">Resume
      //           </Link>
      //         </div>
      //       </div>
      //     </div>
      //   )
      //
      // }
  }
}

export default QuizCard

import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'


class HeaderNav extends Component {

  render(){
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link to={{pathname:'/'}} className="navbar-brand col-3 col-md-2 mr-0">Quizzes</Link>
        {this.props.showHintLink &&
          <Link to={{
                      pathname:'/quiz/hint',
                      state:{
                        quizId: this.props.quizId,
                        question: this.props.question
                      }
                    }}
                 className="nav-link">Hint</Link>}
        {this.props.showBackLink && <Link to={{pathname:'/hint'}} className="nav-link">Hint</Link>}

      </nav>
    );
  }
}

export default HeaderNav

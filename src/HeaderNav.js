import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class HeaderNav extends Component {

  render(){
    // console.log('headerNav', this)
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <Link to={{pathname:'/'}} className="navbar-brand col-3 col-md-2 mr-0">Quizzes</Link>
        {this.props.showHintLink &&
          <button
                 className="btn btn-sm btn-outline-success my-1 my-sm-0 mr-2"
                 onClick = {this.props.viewHint}>
            Hint
          </button>}

        {this.props.showBackLink &&
          <button
                 className="btn btn-sm btn-outline-secondary my-1 my-sm-0 mr-2"
                 onClick = {this.props.viewQuestion}>
            Back
          </button>
          }
      </nav>
    );
  }
}

export default HeaderNav

import React from 'react';
import { connect } from 'react-redux';
import { toggleTextarea } from './actions'

class Closer extends React.Component {

  render() {
    const { dispatch } = this.props
    return (
      <div className="closer">
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          title="Open/Close text area"
          onClick={() => dispatch(toggleTextarea())}
          id="expand-button"
        >
          <i className="material-icons">expand_more</i>
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      isTextareaClose: state.isTextareaClose
    }
  }
)(Closer)

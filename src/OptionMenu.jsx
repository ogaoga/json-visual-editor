import React from 'react';

class OptionMenu extends React.Component {

  render() {
    return (
      <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect" data-mdl-for="more-button">
        <li className="mdl-menu__item" onClick={this.props.pasteSample}>
          Paste Sample JSON
        </li>
        <li className="mdl-menu__item" onClick={() => this.props.setAutoFormat(!this.props.autoFormat)} >
          {(this.props.autoFormat) ? 'Disable Auto Format' : 'Enable Auto Format'}
        </li>
      </ul>
    );
  }
}

import { connect } from 'react-redux'
import { setAutoFormat, pasteSample } from './actions'

export default connect(
  (state) => {
    return {
      autoFormat: state.autoFormat
    }
  },
  (dispatch) => {
    return {
      setAutoFormat: (enabled) => {
        dispatch(setAutoFormat(enabled))
      },
      pasteSample: () => {
        dispatch(pasteSample())
      }
    }
  }
)(OptionMenu)

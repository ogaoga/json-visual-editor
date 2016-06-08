import React from 'react';
import Clipboard from 'clipboard';

import OptionMenu from './OptionMenu';

import { clearText } from './actions'

class ControlsArea extends React.Component {

  componentDidMount() {
    // init clipboard
    new Clipboard('#copy-to-clipboard');
  }

  render() {
    const { dispatch, isEmpty, textLength } = this.props
    return (
      <div className="controls-area">
        <div className="float-left">
          <button id="copy-to-clipboard"
                  data-clipboard-target="#json-text"
                  disabled={isEmpty}
                  className="mdl-button mdl-js-button mdl-button--icon"
                  title="Copy">
            <i className="material-icons">content_copy</i>
          </button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--icon"
                  disabled={isEmpty}
                  onClick={() => dispatch(clearText())}
                  title="Clear">
            <i className="material-icons">delete</i>
          </button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--icon"
                  title="More"
                  id="more-button">
            <i className="material-icons">more_vert</i>
          </button>
          <OptionMenu pasteSample={this.props.pasteSample}
                      autoFormat={this.props.autoFormat}
                      setAutoFormat={this.props.setAutoFormat}
                      />
        </div>
        <div className="float-right control-count">
          <span className="text-count">{textLength}</span>
        </div>
      </div>
		);
  }
}

import { connect }   from 'react-redux'

export default connect(
  (state) => {
    return {
      textLength: state.text.length,
      autoFormat: state.autoFormat,
      isEmpty: state.text.length === 0
    }
  }
)(ControlsArea)

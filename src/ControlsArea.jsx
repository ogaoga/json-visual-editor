import React from 'react';
import Clipboard from 'clipboard';

export default class ControlsArea extends React.Component {

  componentDidMount() {
    // init clipboard
    new Clipboard('#copy-to-clipboard');
  }

  render() {
    return (
      <div className="controls-area">
        <div className="float-left">
          <button id="copy-to-clipboard"
                  data-clipboard-target="#json-text"
                  disabled={this.props.text.length==0}
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Copy</button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  disabled={this.props.text.length==0}
                  onClick={this.props.clearText}>Clear</button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                  onClick={this.props.pasteSample}>Sample</button>
        </div>
        <div className="float-right control-count">
          <span className="text-count">{this.props.text.length}</span>
        </div>
      </div>
		);
  }
}

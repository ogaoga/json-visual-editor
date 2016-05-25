import React from 'react';
import ReactDOM from 'react-dom';
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
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Copy</button>
        </div>
        {/*
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Clear</button>
        </div>
        */}
        <div className="float-right control-count">
          <span className="text-count">0</span>
        </div>
      </div>
		);
	}
}

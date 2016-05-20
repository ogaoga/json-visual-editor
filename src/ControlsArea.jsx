import React from 'react';
import ReactDOM from 'react-dom';

export default class ControlsArea extends React.Component {
	render() {
		return (
      <div className="controls-area">
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Copy</button>
        </div>
        <div className="float-left">
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Clear</button>
        </div>
        <div className="float-right control-count">
          <span className="text-count">0</span>
        </div>
      </div>
		);
	}
}

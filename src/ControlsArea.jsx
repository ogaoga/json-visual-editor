import React from 'react';
import ReactDOM from 'react-dom';

export default class ControlsArea extends React.Component {
	render() {
		return (
      <div>
        <span>Count: 0</span>
        <button>Copy</button>
        <button>Clear</button>
      </div>
		);
	}
}

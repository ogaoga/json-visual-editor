import React from 'react';
import ReactDOM from 'react-dom';

export default class VisualizedData extends React.Component {

	render() {
		return (
      <div>{JSON.stringify(this.props.data)}</div>
		);
	}
}

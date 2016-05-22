import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.styl';
import '../node_modules/material-design-lite/material.min.js';
import Page from './Page';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData(newData) {
    console.log(newData);
    this.setState({data: newData});
  }

	render() {
		return (
			<Page data={this.state.data} updateData={this.updateData} />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

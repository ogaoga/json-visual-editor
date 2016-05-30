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

  componentDidMount() {
    let body = document.getElementsByTagName('body')[0];
    body.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.target.id !== 'json-text') {
        e.stopPropagation();
      }
    });
    body.addEventListener('dragover', (e) => {
      e.preventDefault();
      return false;
    });
    body.addEventListener('dragenter', (e) => {
      //console.log('dragenter', e);
      body.classList.add('dragging');
    });
    body.addEventListener('dragleave', (e) => {
      console.log('dragleave', e.target);
      body.classList.remove('dragging');
    });
  }

  updateData(newData) {
    this.setState({data: newData});
  }

	render() {
		return (
			<Page data={this.state.data} updateData={this.updateData} />
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

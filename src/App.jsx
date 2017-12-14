import React from 'react';
import './styles/index.styl';
import '../node_modules/material-design-lite/material.min.js';
import Page from './Page';

class App extends React.Component {

  constructor(props) {
    super(props);

    // for drag event handling
    this.previousEvent = null;
  }

  componentDidMount() {
    let body = document.getElementsByTagName('body')[0];
    body.addEventListener('drop', (e) => {
      if (e.target.id !== 'json-text') {
        e.preventDefault();
        e.stopPropagation();
      }
      this.previousEvent = 'drop';
      body.classList.remove('dragging');
    });
    body.addEventListener('dragover', (e) => {
      if (this.previousEvent === 'dragenter') {
        body.classList.add('dragging');
      }
      this.previousEvent = 'dragover';
      e.preventDefault();
      return false;
    });
    body.addEventListener('dragenter', () => {
      this.previousEvent = 'dragenter';
    });
    body.addEventListener('dragleave', () => {
      if (this.previousEvent === 'dragover') {
        body.classList.remove('dragging');
      }
      this.previousEvent = 'dragleave';
    });
  }

  render() {
    return (
      <Page />
    );
  }
}

export default App

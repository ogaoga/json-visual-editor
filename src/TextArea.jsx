import React from 'react';

import ControlsArea from './ControlsArea';
import SampleJson   from 'raw!./samples/simple.json';

export default class TextArea extends React.Component {

  constructor(props) {
    super(props);
    let text = (props.data === null) ? '' : JSON.stringify(props.data);
    this.state = {
      text: text
    };
    // bind React.Component for this
    this.onChange = this.onChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.clearText = this.clearText.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    this.pasteSample = this.pasteSample.bind(this);
    // for timer
    this.timeoutId = 0;
  }

  oneshotClass(target, className, timeout = 1000) {
    target.classList.add(className);
    setTimeout(() => {
      target.classList.remove(className);
    }, timeout);
  }

  updateData(text) {
    // Set data
    this.setState({text: text});
    // Highlight textarea
    let jsonText = this.refs.jsonText;
    if (text.length > 0) {
      try {
        let data = JSON.parse(text);
        this.props.updateData(data);
        this.oneshotClass(jsonText, 'valid');
      } catch(e) {
        this.props.updateData(null);
        this.oneshotClass(jsonText, 'invalid');
      }
    }
    else {
      this.props.updateData(null);
    }
  }

  resetTimeout() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      let text = this.refs.jsonText.value;
      this.updateData(text);
    }, 1000);
  }

  onChange(event) {
    this.resetTimeout();
    this.setState({text: event.target.value});
  }

  onDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      var file = event.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = (() => {
        this.updateData(reader.result);
      }).bind(this);
      reader.readAsText(file);
    }
  }

  clearText() {
    this.updateData('');
  }

  pasteSample() {
    if (this.refs.jsonText.value != SampleJson) {
      this.updateData(SampleJson);
    }
  }

  render() {
    return (
      <div>
        <textarea id="json-text"
                  placeholder="Write JSON code or drop a JSON file here."
                  value={this.state.text}
                  onChange={this.onChange}
                  onDrop={this.onDrop}
                  ref="jsonText"></textarea>
        <ControlsArea text={this.state.text}
                      clearText={this.clearText}
                      pasteSample={this.pasteSample}
                      />
      </div>
		);
  }
}

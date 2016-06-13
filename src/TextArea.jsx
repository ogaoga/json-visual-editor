import React from 'react';

import ControlsArea from './ControlsArea';

class TextArea extends React.Component {

  constructor(props) {
    super(props);

    // bind React.Component for this
    this.onChange = this.onChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    // for timer
    this.timeoutId = 0;
  }

  oneshotClass(target, className, timeout = 1000) {
    target.classList.add(className);
    setTimeout(() => {
      target.classList.remove(className);
    }, timeout);
  }

  updateData(text, autoFormat = false) {
    // Format text
    if (text.length > 0 && autoFormat) {
      try {
        text = JSON.stringify(JSON.parse(text), null, 2);
        this.props.onTextChange(text)
      } catch(e) {
        text = null
      }
    }
    // Highlight textarea
    let jsonText = this.refs.jsonText;
    if (text != null && text.length > 0) {
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
      let text = this.refs.jsonText.value
      this.updateData(text, this.props.autoFormat)
    }, 1000);
  }

  onChange(event) {
    this.resetTimeout();
    this.props.dispatch(updateText(event.target.value))
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

  render() {
    return (
      <div>
        <textarea id="json-text"
                  placeholder="Write JSON code or drop a JSON file here."
                  value={this.props.text}
                  onChange={this.onChange}
                  onDrop={this.onDrop}
                  ref="jsonText"></textarea>
        <ControlsArea />
      </div>
		);
  }
}

import { connect }   from 'react-redux'
import { updateText, updateData } from './actions'

export default connect(
  (state) => {
    return {
      text: state.text,
      autoFormat: state.autoFormat
    }
  },
  (dispatch) => {
    return {
      onTextChange: (text) => {
        dispatch(updateText(text))
      },
      updateData: (data) => {
        dispatch(updateData(data))
      }
    }
  }
)(TextArea)

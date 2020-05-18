import React from 'react';
import { connect } from 'react-redux';
import { updateText, setText, resetValid } from './actions';
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

  componentDidMount() {
    // remove class when the animation end
    this.refs.jsonText.addEventListener('animationend', (event) => {
      if (event.animationName === 'invalidFrames' ||
          event.animationName === 'validFrames') {
        this.props.resetValid()
      }
    }, false)
  }

  resetTimeout() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      let text = this.refs.jsonText.value
      this.props.setText(text)
    }, 1000);
  }

  onChange(event) {
    this.resetTimeout();
    this.props.updateText(event.target.value)
  }

  onDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      var file = event.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = (() => {
        this.props.setText(reader.result)
      }).bind(this);
      reader.readAsText(file);
    }
  }

  render() {
    return (
      <div className="textarea-column">
        <textarea id="json-text"
          className={this.props.valid}
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

export default connect(
  (state) => {
    return {
      text: state.text,
      autoFormat: state.autoFormat,
      valid: state.valid
    }
  },
  (dispatch) => {
    return {
      updateText: (text) => {
        dispatch(updateText(text))
      },
      setText: (text) => {
        dispatch(setText(text))
      },
      resetValid: () => {
        dispatch(resetValid())
      }
    }
  }
)(TextArea)

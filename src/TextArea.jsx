import React from 'react';
import ReactDOM from 'react-dom';

import ControlsArea   from './ControlsArea';

export default class TextArea extends React.Component {

  constructor(props) {
    super(props);
    let text = (props.data === null) ? "" : JSON.stringify(props.data)
    this.state = {
      text: text
    };
    // bind React.Component for this
    this.onChange = this.onChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  updateData(text) {
    this.setState({text: text});
    try {
      let data = JSON.parse(text);
      this.props.updateData(data);
    } catch(e) {
      //console.log(e);
      this.props.updateData(null);
    }
  }

  componentDidMount() {
    // Refresh
    setInterval((() => {
      let text = this.refs.jsonText.value;
      this.updateData(text);
    }).bind(this), 3000);
  }

  onChange(event) {
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

	render() {
		return (
      <div>
        <textarea id="json-text"
                  placeholder="Write JSON code here."
                  value={this.state.text}
                  onChange={this.onChange}
                  onDrop={this.onDrop}
                  ref="jsonText"></textarea>
        <ControlsArea text={this.state.text}
                      clearText={this.clearText} />
      </div>
		);
	}
}

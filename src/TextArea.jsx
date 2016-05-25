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
    this.clearText = this.clearText.bind(this);
  }

  componentDidMount() {
    setInterval((() => {
      let text = this.refs.jsonText.value;
      try {
        let data = JSON.parse(text);
        this.props.updateData(data);
      } catch(e) {
        console.log(e);
      }
    }).bind(this), 3000);
  }

  onChange(event) {
    this.setState({text: event.target.value});
  }

  clearText() {
    this.setState({text: ''});
  }

	render() {
		return (
      <div>
        <textarea id="json-text"
                  placeholder="Write JSON code here."
                  value={this.state.text}
                  onChange={this.onChange}
                  ref="jsonText"></textarea>
        <ControlsArea text={this.state.text}
                      clearText={this.clearText} />
      </div>
		);
	}
}

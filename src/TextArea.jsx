import React from 'react';
import ReactDOM from 'react-dom';

export default class TextArea extends React.Component {

  constructor(props) {
    super(props);
    let text = (props.data === null) ? "" : JSON.stringify(props.data)
    this.state = {
      text: text
    };
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

	render() {
		return (
      <textarea placeholder="Write JSON code here."
                defalutValue={this.state.text}
                ref="jsonText"></textarea>
		);
	}
}

import React from 'react';

export default class StringType extends React.Component {

  render() {
    let data = this.props.data;
    return (
      <span className="string-type">"{data}"</span>
    );
  }
}

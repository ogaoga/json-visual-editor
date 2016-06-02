import React from 'react';

export default class NumberType extends React.Component {

  render() {
    let data = this.props.data;
    return (
      <span className="number-type">{data}</span>
    );
  }
}

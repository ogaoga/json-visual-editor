import React from 'react';

export default class BooleanType extends React.Component {

  render() {
    let data = this.props.data;
    return (
      <label className="mdl-checkbox mdl-js-checkbox boolean-type">
        <input type="checkbox"
          checked={data}
          readOnly
          className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">{(data)?'true':'false'}</span>
      </label>
    );
  }
}

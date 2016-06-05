import React from 'react';

import BooleanType from './BooleanType';
import NumberType  from './NumberType';
import StringType  from './StringType';

export default class ObjectType extends React.Component {

  render() {
    let data = this.props.data;
    let result = null;
    if (data === null) {
      // null
      result = (<span className="null">null</span>);
    }
    else if (typeof(data) === typeof({}) && data !== null) {
      // Object or Array
      let rows = Object.keys(data).map((name) => {
        return (
          <tr key={name}>
            <th>{name}</th>
            <td><ObjectType data={data[name]} /></td>
          </tr>
        );
      });
      const headerLabel = rows.length.toString() + ' element' + ((rows.length>1) ? 's' : '');
      result = (
        <table>
          <thead>
            <tr><th colSpan="2">{headerLabel}</th></tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
    else if (typeof(data) === typeof(1)) {
      // Number
      result = (<NumberType data={data} />);
    }
    else if (typeof(data) === typeof('a')) {
      // String
      result= (<StringType data={data} />);
    }
    else if (typeof(data) === typeof(true)) {
      // Boolean
      result = (<BooleanType data={data} />);
    }
    else {
      // something else
      result = (<span className="undefined">{data}</span>);
    }
    return result;
  }
}

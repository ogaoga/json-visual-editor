import React from 'react';

import BooleanType from './BooleanType';
import NumberType  from './NumberType';
import StringType  from './StringType';
import Expander    from '../Expander';

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
            <td><ObjectType data={data[name]} pos={this.props.pos + '-' + name} expanded={this.props.expanded} /></td>
          </tr>
        );
      });
      const typeLabel = Array.isArray(data) ? 'Array' : 'Object';
      const headerLabel = '[' + rows.length.toString() + ']';
      let tbodyClass = 'expanded'
      if (this.props.pos in this.props.expanded) {
        tbodyClass = this.props.expanded[this.props.pos] ? 'expanded' : ''
      }
      result = (
        <table>
          <thead>
            <tr>
              <th className="expand">
                <Expander pos={this.props.pos} />
              </th>
              <th className="objectType">
                {typeLabel} {headerLabel}
              </th>
            </tr>
          </thead>
          <tbody className={tbodyClass}>
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

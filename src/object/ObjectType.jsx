import React from 'react';

import BooleanType from './BooleanType';
import NumberType  from './NumberType';
import StringType  from './StringType';
import Expander    from '../Expander';

export default class ObjectType extends React.Component {

  constructor(props) {
    super(props);

    // state
    this.state = {
      expanded: true
    };

    // props
    this.level = props.level || 0;
    this.maxLevel = 5;
    this.nextLevel = this.level == this.maxLevel ? 0 : this.level + 1
  }

  onChangeExpansion(isExpanded) {
    this.setState({expanded: isExpanded});
  }

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
            <td><ObjectType data={data[name]} level={this.nextLevel} /></td>
          </tr>
        );
      });
      const typeLabel = Array.isArray(data) ? 'Array' : 'Object';
      const headerLabel = '[' + rows.length.toString() + ']';
      result = (
        <table>
          <thead data-level={this.level}>
            <tr>
              <th className="expand">
                <Expander defaultValue={this.state.expanded} onChangeExpansion={(flag)=>this.onChangeExpansion(flag)} />
              </th>
              <th className="objectType">
                {`${typeLabel} ${headerLabel}`}
              </th>
            </tr>
          </thead>
          <tbody className={(this.state.expanded) ? 'expanded' : ''}>
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

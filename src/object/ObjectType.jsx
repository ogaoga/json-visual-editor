import React from 'react';
import ReactDOM from 'react-dom';

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
          <tr>
            <th>{name}</th>
            <td><ObjectType data={data[name]} /></td>
          </tr>
        );
      });
      result = (
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
	    );
    }
    else if (typeof(data) === typeof(1)) {
      // Number
      result = (<span className="number">{data}</span>);
    }
    else if (typeof(data) === typeof("a")) {
      // String
      result= (<span className="string">"{data}"</span>);
    }
    else if (typeof(data) === typeof(true)) {
      // Boolean
      result = (<span className="boolean">{(data)?'true':'false'}</span>);
    }
    else {
      // something else
      result = (<span className="undefined">{data}</span>);
    }
    return result;
  }
}

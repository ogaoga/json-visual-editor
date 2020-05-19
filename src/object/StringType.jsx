import React from 'react';
import is    from 'is_js';

export default class StringType extends React.Component {
  render() {
    let data = this.props.data;
    if (is.url(data)) {
      if (data.match(/\.(jpg|jpeg|png|gif)$/)) {
        data = <a href={data} target="_blank" rel="noopener noreferrer"><img src={data} alt={data} /><br /><span>{data}</span></a>;
      }
      else {
        data = <a href={data} target="_blank" rel="noopener noreferrer"><span>{data}</span></a>;
      }
    }
    else {
      data = '"'+data+'"';
    }
    return (
      <span className="string-type">{data}</span>
    );
  }
}

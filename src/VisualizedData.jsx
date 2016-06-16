import React      from 'react';
import ObjectType from './object/ObjectType';

class VisualizedData extends React.Component {
  render() {
    return (
      <ObjectType data={this.props.data} />
		);
  }
}

import { connect }   from 'react-redux'

export default connect(
  (state) => {
    return {
      data: state.data
    }
  }
)(VisualizedData)

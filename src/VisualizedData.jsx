import React      from 'react';
import ObjectType from './object/ObjectType';
import { connect } from 'react-redux';

class VisualizedData extends React.Component {
  render() {
    return (
      <ObjectType data={this.props.data} />
    );
  }
}

export default connect(
  (state) => {
    return {
      data: state.data
    }
  }
)(VisualizedData)

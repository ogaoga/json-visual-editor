import React    from 'react';

import ObjectType   from './object/ObjectType';

export default class VisualizedData extends React.Component {

  render() {
    return (
      <ObjectType data={this.props.data} />
		);
  }
}

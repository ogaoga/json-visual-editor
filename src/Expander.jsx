import React from 'react';

class Expander extends React.Component {

  constructor(props) {
    super(props);

    // bind
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.toggleExpanded(this.props.pos)
    this.forceUpdate()
  }

  render() {
    let newClass = 'expanded'
    if (this.props.pos in this.props.expanded) {
      newClass = this.props.expanded[this.props.pos] ? 'expanded' : ''
    }
    const classes = [
      'component-expander',
      newClass
    ].join(' ');
    return (
      <a href="#" className={classes} onClick={this.onClick}>
        <i className="material-icons">expand_more</i>
      </a>
    );
  }

}

import { connect }     from 'react-redux'
import { toggleExpanded } from './actions'

export default connect(
  (state) => {
    return {
      expanded: state.expanded
    }
  },
  (dispatch) => {
    return {
      toggleExpanded: (position) => {
        dispatch(toggleExpanded(position))
      }
    }
  }
)(Expander)

import React from 'react';

export default class Expander extends React.Component {

  constructor(props) {
    super(props);

    // state
    this.state = {
      expanded: props.defaultValue,
    };
  }

  onClick() {
    const newValue = !this.state.expanded;
    this.setState({ expanded: newValue });
    if ('onChangeExpansion' in this.props) {
      this.props.onChangeExpansion(newValue);
    }
  }

  render() {
    const classes = [
      'component-expander',
      this.state.expanded ? 'expanded' : '',
      'mdl-button',
      'mdl-js-button',
    ].join(' ');
    return (
      <button className={classes} onClick={(event) => this.onClick(event)}>
        <i className="material-icons">expand_more</i>
      </button>
    );
  }
}

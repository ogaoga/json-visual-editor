import React from 'react';

export default class Expander extends React.Component {

  constructor(props) {
    super(props);

    // state
    this.state = {
      expanded: this.props.defaultValue
    };

    // bind
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const newValue = !this.state.expanded;
    this.setState({expanded: newValue});
    if ('onChangeExpansion' in this.props) {
      this.props.onChangeExpansion(newValue);
    }
  }

  render() {
    const classes = [
      'component-expander',
      (this.state.expanded) ? 'expanded' : ''
    ].join(' ');
    return (
      <a href="#" className={classes} onClick={this.onClick}>
        <i className="material-icons">expand_more</i>
      </a>
    );
  }

}

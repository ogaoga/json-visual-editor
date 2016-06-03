import React from 'react';

export default class OptionMenu extends React.Component {

  render() {
    return (
      <ul className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
          data-mdl-for="more-button">
        <li className="mdl-menu__item"
            onClick={this.props.pasteSample}>
          Paste Sample JSON
        </li>
        <li className="mdl-menu__item"
            onClick={this.props.setAutoFormat.bind(this, !this.props.autoFormat)}>
          {(this.props.autoFormat) ? 'Disable Auto Format' : 'Enable Auto Format'}
        </li>
      </ul>
		);
  }
}

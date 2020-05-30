import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        JSON Visual Editor
      </a>
      <ul className="nav justify-content-end">
        <li>
          <a
            className="mdl-navigation__link"
            href="https://github.com/ogaoga/json-visual-editor/issues/new"
          >
            <i className="material-icons">feedback</i> Feedback
          </a>
        </li>
      </ul>
    </header>
  );
};

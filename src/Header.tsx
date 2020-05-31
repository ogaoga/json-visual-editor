import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        JSON Visual Editor
      </a>
      <ul className="nav justify-content-end">
        <li>
          <a
            href="https://github.com/ogaoga/json-visual-editor/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-comment" /> Feedback
          </a>
        </li>
      </ul>
    </header>
  );
};

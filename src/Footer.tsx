import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark">
      <div>
        <span>
          <a href="https://github.com/ogaoga/json-visual-editor">
            Source code on GitHub
          </a>
        </span>
        <span> | </span>
        <span>
          <a href="http://qiita.com/ogaoga/items/1dae5586601e6900c3f1">
            Development guide on Qiita
          </a>
        </span>
      </div>
      <div>
        <span>Copyright &copy; 2016 - 2020 ogaoga.org</span>
      </div>
    </footer>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTextarea } from './actions';

const Closer: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="closer">
      <button
        className="mdl-button mdl-js-button mdl-button--icon"
        title="Open/Close text area"
        onClick={() => dispatch(toggleTextarea())}
        id="expand-button"
      >
        <i className="material-icons">expand_more</i>
      </button>
    </div>
  );
};

export default Closer;

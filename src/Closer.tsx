import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { textareaSlice } from './features/textarea/textareaSlice';

const Closer: React.FC = () => {
  const { toggleTextarea } = textareaSlice.actions;
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(toggleTextarea());
  }, [dispatch, toggleTextarea]);

  return (
    <div className="closer">
      <button
        title="Open/Close text area"
        onClick={onClick}
        id="expand-button"
      >
        <i className="material-icons">expand_more</i>
      </button>
    </div>
  );
};

export default Closer;

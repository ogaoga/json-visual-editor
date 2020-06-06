import React, { useCallback, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Path } from '../types';
import { dataSlice } from '../features/data/dataSlice';

interface Props {
  data: any;
  path: Path;
}

export const EditButtons: React.FC<Props> = ({ data, path }) => {
  const onCopyButtonClicked = useCallback((event: SyntheticEvent) => {
    if (navigator.clipboard) {
      const value = event.currentTarget.getAttribute('data-value') || '';
      navigator.clipboard.writeText(`${value}`);
    }
  }, []);

  const dispatch = useDispatch();
  const { deletePath } = dataSlice.actions;

  const onDeleteButtonClicked = useCallback(() => {
    dispatch(deletePath(path));
  }, [path, dispatch, deletePath]);

  return (
    <div className="d-flex flex-row">
      {navigator.clipboard &&
        (typeof data === 'string' || typeof data === 'number') && (
          <button
            title="Copy text"
            data-value={data}
            className="copy-button btn btn-sm btn-link ml-1"
            onClick={onCopyButtonClicked}
          >
            <i className="far fa-copy" />
          </button>
        )}
      <button
        className="copy-button btn btn-sm btn-link ml-1"
        onClick={onDeleteButtonClicked}
      >
        <i className="far fa-trash-alt" />
      </button>
    </div>
  );
};

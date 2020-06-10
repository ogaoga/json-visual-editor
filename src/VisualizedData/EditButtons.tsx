import React, { useCallback, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Path } from '../types';
import { dataSlice } from '../features/data/dataSlice';

interface Props {
  data: any;
  path: Path;
  hidden: boolean;
}

export const EditButtons: React.FC<Props> = ({
  data,
  path,
  hidden = false,
}) => {
  const onCopyButtonClicked = useCallback((event: SyntheticEvent) => {
    if (navigator.clipboard) {
      const value = event.currentTarget.getAttribute('data-value') || '';
      navigator.clipboard.writeText(`${value}`);
    }
  }, []);

  const dispatch = useDispatch();
  const { deletePath, setEditPath } = dataSlice.actions;

  const onDeleteButtonClicked = useCallback(() => {
    dispatch(deletePath(path));
  }, [path, dispatch, deletePath]);

  const onEditButtonClicked = useCallback(() => {
    dispatch(setEditPath(path));
  }, [dispatch, path, setEditPath]);

  return (
    <div
      className={`edit-buttons d-flex flex-row ${hidden ? 'hidden' : ''}`}
    >
      {!Array.isArray(data) && typeof data !== typeof {} && (
        <button
          title="Edit the value"
          data-value={data}
          className="btn btn-sm btn-link ml-1"
          onClick={onEditButtonClicked}
        >
          <i className="far fa-edit" />
        </button>
      )}
      {navigator.clipboard &&
        (typeof data === 'string' || typeof data === 'number') && (
          <button
            title="Copy text"
            data-value={data}
            className="btn btn-sm btn-link ml-1"
            onClick={onCopyButtonClicked}
          >
            <i className="far fa-copy" />
          </button>
        )}
      <button
        className="btn btn-sm btn-link ml-1"
        onClick={onDeleteButtonClicked}
      >
        <i className="far fa-trash-alt" />
      </button>
    </div>
  );
};

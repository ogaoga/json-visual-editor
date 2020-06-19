import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Path, EditType } from '../types';
import { dataSlice } from '../features/data/dataSlice';
import { isObject, isArray } from 'lodash';

interface Props {
  data: any;
  path: Path;
  hidden: boolean;
}

export const KeyEditButtons: React.FC<Props> = ({
  data,
  path,
  hidden = false,
}) => {
  const dispatch = useDispatch();
  const { setEditMode } = dataSlice.actions;

  const onEditButtonClicked = useCallback(() => {
    dispatch(setEditMode({ path, type: EditType.Key }));
  }, [dispatch, path, setEditMode]);

  return (
    <div
      className={`edit-buttons d-flex flex-row align-items-start ${
        hidden ? 'hidden' : ''
      }`}
    >
      {!isArray(data) && isObject(data) && (
        <button
          title="Edit the key"
          data-value={data}
          className="btn btn-sm btn-link mr-1"
          onClick={onEditButtonClicked}
        >
          <i className="far fa-edit" />
        </button>
      )}
    </div>
  );
};

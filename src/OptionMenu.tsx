import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { dataSlice } from './features/data/dataSlice';

const OptionMenu: React.FC= () => {
  const dispatch = useDispatch();
  const { pasteSample } = dataSlice.actions;

  const onPasteClicked = useCallback(() => {
    dispatch(pasteSample());
  }, [dispatch, pasteSample]);

  return (
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" onClick={onPasteClicked}>
        Paste Sample JSON
      </a>
    </div>
  );
};

export default OptionMenu;

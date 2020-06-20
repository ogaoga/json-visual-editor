import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { dataSlice } from './features/data/dataSlice';

interface Props {
  ariaLabelledby: string;
}

const OptionMenu: React.FC<Props> = ({ ariaLabelledby }) => {
  const dispatch = useDispatch();
  const { pasteSample } = dataSlice.actions;

  const onPasteClicked = useCallback(() => {
    dispatch(pasteSample());
  }, [dispatch, pasteSample]);

  return (
    <div className="dropdown-menu" aria-labelledby={ariaLabelledby}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a id="paste-sample-json-menu-item" className="dropdown-item" onClick={onPasteClicked}>
        Paste Sample JSON
      </a>
    </div>
  );
};

export default OptionMenu;

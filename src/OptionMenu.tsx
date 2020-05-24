import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { dataSlice } from './features/data/dataSlice';

const OptionMenu: React.FC = () => {
  const dispatch = useDispatch();
  const { pasteSample } = dataSlice.actions;

  const onPasteClicked = useCallback(() => {
    dispatch(pasteSample());
  }, [dispatch, pasteSample]);

  return (
    <ul
      className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
      data-mdl-for="more-button"
    >
      <li className="mdl-menu__item" onClick={onPasteClicked}>
        Paste Sample JSON
      </li>
    </ul>
  );
};

export default OptionMenu;

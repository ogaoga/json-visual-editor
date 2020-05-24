import React, { useCallback } from 'react';
import { pasteSample } from './actions';
import { useDispatch } from 'react-redux';

const OptionMenu: React.FC = () => {
  const dispatch = useDispatch();

  const onPasteClicked = useCallback(() => {
    dispatch(pasteSample());
  }, [dispatch]);

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

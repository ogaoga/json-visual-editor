import React, { useCallback } from 'react';
import { setAutoFormat, pasteSample } from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from './reducers';

const OptionMenu: React.FC = () => {
  const dispatch = useDispatch();
  const autoFormat = useSelector((state: State) => state.autoFormat);

  const onPasteClicked = useCallback(() => {
    dispatch(pasteSample());
  }, [dispatch]);

  const onAutoFormatClicked = useCallback(() => {
    dispatch(setAutoFormat(!autoFormat));
  }, [autoFormat, dispatch]);

  return (
    <ul
      className="mdl-menu mdl-menu--top-left mdl-js-menu mdl-js-ripple-effect"
      data-mdl-for="more-button"
    >
      <li className="mdl-menu__item" onClick={onPasteClicked}>
        Paste Sample JSON
      </li>
      <li className="mdl-menu__item" onClick={onAutoFormatClicked}>
        {autoFormat ? 'Disable Auto Format' : 'Enable Auto Format'}
      </li>
    </ul>
  );
};

export default OptionMenu;

import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Clipboard from 'clipboard';
import { saveAs } from 'file-saver';

import OptionMenu from './OptionMenu';
import { RootState } from '.';
import { dataSlice } from './features/data/dataSlice';
import { ValidityType, textareaSlice } from './features/textarea/textareaSlice';

const ControlsArea: React.FC = () => {
  useEffect(() => {
    // init clipboard
    new Clipboard('#copy-to-clipboard');
  }, []);

  const downloadJson = (text: string) => {
    var blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'data.json');
  };

  const dispatch = useDispatch();
  const { setData } = dataSlice.actions;
  const { setLocalText } = textareaSlice.actions;

  const text = useSelector((state: RootState) => state.textarea.localText);
  const isEmpty = useMemo(() => text.length === 0, [text.length]);
  const isValid = useSelector(
    (state: RootState) => state.textarea.validity === ValidityType.Valid
  );

  const onDeleteButtonClicked = useCallback(() => {
    dispatch(setData(null));
    dispatch(setLocalText(''));
  }, []);

  return (
    <div className="controls-area">
      <div className="float-left">
        <button
          id="copy-to-clipboard"
          data-clipboard-target="#json-text"
          disabled={!isValid}
          className="btn btn-link"
          title="Copy"
        >
          <i className="far fa-copy" />
        </button>
      </div>
      <div className="float-left">
        <button
          id="donwload"
          disabled={!isValid}
          className="btn btn-link"
          onClick={() => downloadJson(text)}
          title="Download"
        >
          <i className="fas fa-file-download" />
        </button>
      </div>
      <div className="float-left">
        <button
          className="btn btn-link"
          disabled={isEmpty}
          onClick={onDeleteButtonClicked}
          title="Clear"
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
      <div className="float-left dropdown">
        <button
          className="btn btn-link"
          title="More"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-ellipsis-v" />
        </button>
        <OptionMenu />
      </div>
      <div className="float-right control-count">
        <span className="text-count">{text.length}</span>
      </div>
    </div>
  );
};

export default ControlsArea;

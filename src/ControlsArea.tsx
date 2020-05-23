import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Clipboard from 'clipboard';
import { saveAs } from 'file-saver';

import OptionMenu from './OptionMenu';
import { clearText } from './actions';
import { State } from './reducers';

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
  const text = useSelector((state: State) => state.text);
  const textLength = text.length;
  const isEmpty = text.length === 0;

  return (
    <div className="controls-area">
      <div className="float-left">
        <button
          id="copy-to-clipboard"
          data-clipboard-target="#json-text"
          disabled={isEmpty}
          className="mdl-button mdl-js-button mdl-button--icon"
          title="Copy"
        >
          <i className="material-icons">content_copy</i>
        </button>
      </div>
      <div className="float-left">
        <button
          id="donwload"
          disabled={isEmpty}
          className="mdl-button mdl-js-button mdl-button--icon"
          onClick={() => downloadJson(text)}
          title="Download"
        >
          <i className="material-icons">file_download</i>
        </button>
      </div>
      <div className="float-left">
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          disabled={isEmpty}
          onClick={() => dispatch(clearText())}
          title="Clear"
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
      <div className="float-left">
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          title="More"
          id="more-button"
        >
          <i className="material-icons">more_vert</i>
        </button>
        <OptionMenu />
      </div>
      <div className="float-right control-count">
        <span className="text-count">{textLength}</span>
      </div>
    </div>
  );
};

export default ControlsArea;

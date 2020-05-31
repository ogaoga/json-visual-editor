import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import ControlsArea from './ControlsArea';
import { RootState } from './index';
import { dataSlice } from './features/data/dataSlice';
import { textareaSlice, ValidityType } from './features/textarea/textareaSlice';

const tabSize = 4;

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  // const validity = useSelector((state: RootState) => state.textarea.validity);

  const text = useMemo(() => {
    return data === null ? '' : JSON.stringify(data, null, tabSize);
  }, [data]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(
    setTimeout(() => {}, 0)
  );
  const { setData } = dataSlice.actions;

  const localText = useSelector((state: RootState) => state.textarea.localText);
  const { setLocalText } = textareaSlice.actions;

  // state to local
  useEffect(() => {
    dispatch(setLocalText(text));
  }, [text]);

  // local to state
  useEffect(() => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      try {
        const data = localText.length > 0 ? JSON.parse(localText) : null;
        dispatch(setData(data));
      } catch {}
    }, 1000);
    setTimeoutId(id);
  }, [localText]);

  // update local text
  const onChange = useCallback((newValue) => {
    dispatch(setLocalText(newValue));
  }, []);

  return (
    <div className="textarea-column d-flex flex-column h-100">
      <ControlsArea />
      <div className="monaco-wrapper h-100 flex-grow-1">
        <MonacoEditor
          language="json"
          theme="vs"
          value={localText}
          onChange={onChange}
          options={{
            automaticLayout: true,
            formatOnPaste: true,
            formatOnType: true,
            renderLineHighlight: 'none',
            autoClosingOvertype: 'always',
            cursorStyle: 'block',
            quickSuggestions: false,
            scrollBeyondLastLine: false,
            snippetSuggestions: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default TextArea;

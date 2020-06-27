import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import ControlsArea from './ControlsArea';
import { RootState } from './index';
import { dataSlice } from './features/data/dataSlice';
import { textareaSlice } from './features/textarea/textareaSlice';

const tabSize = 4;
const localStorageKey = 'json-text';

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);

  const text = useMemo(() => {
    return data === null ? '' : JSON.stringify(data, null, tabSize);
  }, [data]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(
    setTimeout(() => {}, 0)
  );
  const { setData } = dataSlice.actions;

  const localText = useSelector((state: RootState) => state.textarea.localText);
  const { setLocalText } = textareaSlice.actions;

  // initialize
  useEffect(() => {
    // load from local storage
    const jsonText = localStorage.getItem(localStorageKey);
    if (jsonText) {
      const data = JSON.parse(jsonText);
      dispatch(setData(data));
    }
  }, [dispatch, setData]);

  // state to local
  useEffect(() => {
    dispatch(setLocalText(text));
  }, [text, dispatch, setLocalText]);

  // local to state
  useEffect(() => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      try {
        const data = localText.length > 0 ? JSON.parse(localText) : null;
        dispatch(setData(data));
        // Save to local storage
        localStorage.setItem(localStorageKey, localText);
      } catch {}
    }, 1000);
    setTimeoutId(id);
  }, [dispatch, localText, setData]); // eslint-disable-line react-hooks/exhaustive-deps

  // update local text
  const onChange = useCallback(
    (newValue) => {
      dispatch(setLocalText(newValue));
    },
    [dispatch, setLocalText]
  );

  // for updating layout of the editor
  const isDragging = useSelector(
    (state: RootState) => state.textarea.isDragging
  );
  const editor = useRef<MonacoEditor>(null);
  useEffect(() => {
    if (!isDragging) {
      editor.current?.editor?.layout();
    }
  }, [isDragging, editor]);

  return (
    <div className="textarea-column d-flex flex-column h-100">
      <ControlsArea />
      <div className="monaco-wrapper h-100 flex-grow-1">
        <MonacoEditor
          language="json"
          theme="vs"
          value={localText}
          ref={editor}
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
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TextArea;

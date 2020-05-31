import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import ControlsArea from './ControlsArea';
import { RootState } from './index';
import { dataSlice } from './features/data/dataSlice';
import { textareaSlice, ValidityType } from './features/textarea/textareaSlice';

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  // const validity = useSelector((state: RootState) => state.textarea.validity);

  const text = useMemo(() => {
    return data === null ? '' : JSON.stringify(data, null, 2);
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

  const editorDidMount = useCallback(() => {
    // ToDo
  }, []);

  /*
  const onDrop = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      var file = event.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // TODO: it doesn't work
          dispatch(setLocalText(reader.result));
        }
      };
      reader.readAsText(file);
    }
  };
  */

  /*
  const textareaClasses = useMemo(() => {
    switch (validity) {
      case ValidityType.Valid:
        return 'valid';
      case ValidityType.Invalid:
        return 'invalid';
      case ValidityType.None:
        return '';
    }
  }, [validity]);
  */

  const options = {
    selectOnLineNumbers: true,
  };

  return (
    <div className="textarea-column d-flex flex-column h-100">
      <ControlsArea />
      <MonacoEditor
        language="json"
        theme="vs"
        value={localText}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
};

export default TextArea;

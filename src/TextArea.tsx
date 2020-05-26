import React, {
  useState,
  useRef,
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ControlsArea from './ControlsArea';
import { RootState } from './index';
import { dataSlice } from './features/data/dataSlice';

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const jsonText = useRef(null);
  const data = useSelector((state: RootState) => state.data.data);

  const text = useMemo(() => {
    return data === null ? '' : JSON.stringify(data, null, 2);
  }, [data]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(
    setTimeout(() => {}, 0)
  );
  const [localText, setLocalText] = useState(text);

  const { setData } = dataSlice.actions;

  // state to local
  useEffect(() => {
    setLocalText(text);
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
  const onChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setLocalText(event.target.value);
  }, []);

  const onDrop = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      var file = event.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // TODO: it doesn't work
          setLocalText(reader.result);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="textarea-column">
      <textarea
        id="json-text"
        placeholder="Write JSON code or drop a JSON file here."
        value={localText}
        onChange={onChange}
        onDrop={onDrop}
        ref={jsonText}
      ></textarea>
      <ControlsArea />
    </div>
  );
};

export default TextArea;

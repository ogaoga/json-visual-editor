import React, {
  useState,
  useRef,
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ControlsArea from './ControlsArea';
import { RootState } from './index';
import { dataSlice } from './features/data/dataSlice';

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const jsonText = useRef(null);
  const text = useSelector((state: RootState) => state.data.text);
  const valid = useSelector((state: RootState) => state.data.valid);

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(
    setTimeout(() => {}, 0)
  );
  const [localText, setLocalText] = useState(text);

  const { setText } = dataSlice.actions;

  // TODO: to be implemented
  /*
  useEffect(() => {
    // remove class when the animation end
    jsonText.current.addEventListener(
      'animationend',
      (event) => {
        if (
          event.animationName === 'invalidFrames' ||
          event.animationName === 'validFrames'
        ) {
          dispatch(resetValid());
        }
      },
      false
    );
  }, [dispatch, jsonText]);
  */

  // state to local
  useEffect(() => { 
    setLocalText(text);
  }, [text]);

  // local to state
  useEffect(() => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      try {
        JSON.parse(localText);
        dispatch(setText(localText));
      } catch {
        console.log(localText);
      }
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
          dispatch(setText(reader.result || ''));
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="textarea-column">
      <textarea
        id="json-text"
        className={valid}
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

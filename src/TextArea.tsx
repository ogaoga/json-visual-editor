import React, { useState, useRef, ChangeEvent, useCallback } from 'react';
import { updateText, setText } from './actions';
import ControlsArea from './ControlsArea';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './index';

const TextArea: React.FC = () => {
  const dispatch = useDispatch();
  const jsonText = useRef(null);
  const text = useSelector((state: RootState) => state.data.text);
  const valid = useSelector((state: RootState) => state.data.valid);

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(
    setTimeout(() => {}, 0)
  );
  const [localText, setLocalText] = useState(text);

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

  const resetTimeout = useCallback(() => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      dispatch(setText(localText));
    }, 1000);
    setTimeoutId(id);
  }, [dispatch, localText, timeoutId]);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    resetTimeout();
    dispatch(updateText(event.target.value));
    setLocalText(event.target.value);
  };

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
        value={text}
        onChange={onChange}
        onDrop={onDrop}
        ref={jsonText}
      ></textarea>
      <ControlsArea />
    </div>
  );
};

export default TextArea;

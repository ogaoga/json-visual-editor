import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Path } from '../types';
import { dataSlice } from '../features/data/dataSlice';
import { useDispatch } from 'react-redux';

interface Props {
  path: Path;
  defaultValue: any;
  onCancel: () => void;
  onUpdate: (path: Path, value: any) => void;
  checkValid?: (newValue: string) => boolean;
}

export const KeyEditor: React.FC<Props> = ({
  path,
  defaultValue,
  onCancel,
  onUpdate,
  checkValid,
}) => {
  // Dispatch
  const dispatch = useDispatch();
  // Validation
  const [isValid, setValid] = useState(true);
  // Value
  const [value, setValue] = useState<any>(defaultValue);
  const onValueChanged = useCallback(
    (event) => {
      // set value
      const { value: newValue } = event.target;
      setValue(newValue);
      // validation
      if (checkValid) {
        // check value and show
        if (newValue === defaultValue) {
          setValid(true);
        } else {
          setValid(checkValid(newValue));
        }
      }
    },
    [checkValid, defaultValue]
  );
  // Check valid
  useEffect(() => {
    setValid(defaultValue.length > 0);
  }, [defaultValue]);
  // OK Button
  const onOKClicked = useCallback(() => {
    if (isValid) {
      onUpdate(path, value);
    }
  }, [isValid, onUpdate, path, value]);
  // Cancel button
  const { deletePath } = dataSlice.actions;
  const onCancelClicked = useCallback(() => {
    if (value === '') {
      dispatch(deletePath(path));
    }
    onCancel();
  }, [deletePath, dispatch, onCancel, path, value]);

  // Focus on editing
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [textFieldRef]);

  // Keyboard handling
  const [keyCode, setKeyCode] = useState<number | null>(null);
  const onKeyDown = useCallback((event) => {
    setKeyCode(event.keyCode);
  }, []);
  const onKeyUp = useCallback(
    (event) => {
      if (
        (event.key === 'Enter' || event.keyCode === 13) &&
        keyCode === event.keyCode
      ) {
        if (isValid) {
          onOKClicked();
        }
        event.preventDefault();
      } else if (
        (event.key === 'Escape' || event.keyCode === 27) &&
        keyCode === event.keyCode
      ) {
        onCancelClicked();
        event.preventDefault();
      } else {
        //
      }
    },
    [keyCode, isValid, onOKClicked, onCancelClicked]
  );

  return (
    <div className="value-editor d-flex flex-row-reverse">
      <div>
        <input
          type="text"
          className={`text-editor form-control form-control-sm for-key ${
            isValid ? '' : 'is-invalid'
          }`}
          value={value}
          onChange={onValueChanged}
          ref={textFieldRef}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      </div>
      <span className="buttons">
        <button
          className="ok-button btn btn-sm btn-link"
          onClick={onOKClicked}
          disabled={!isValid}
        >
          <i className="fas fa-check-circle" />
        </button>
        <button
          className="cancel-button btn btn-sm btn-link"
          onClick={onCancelClicked}
        >
          <i className="fas fa-times-circle" />
        </button>
      </span>
    </div>
  );
};

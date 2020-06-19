import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Path } from '../types';

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
    [setValue]
  );
  // Buttons
  const onOKClicked = useCallback(() => {
    if (isValid) {
      onUpdate(path, value);
    }
  }, [onUpdate, path, value]);
  const onCancelClicked = useCallback(() => {
    onCancel();
  }, [onCancel]);

  // Focus on editing
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [textFieldRef]);

  // Keyboard handling
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (isValid) {
          onOKClicked();
        }
        event.preventDefault();
      } else if (event.key === 'Escape' || event.keyCode === 27) {
        onCancelClicked();
        event.preventDefault();
      } else {
        //
      }
    },
    [onOKClicked, onCancelClicked]
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

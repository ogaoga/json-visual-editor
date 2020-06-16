import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Path } from '../types';
import BooleanType from '../object/BooleanType';
import ObjectType from '../object/ObjectType';
import { DataType, getType, cast } from '../object/DataType';

interface Props {
  path: Path;
  defaultValue: any;
  onCancel: () => void;
  onUpdate: (path: Path, value: any) => void;
}

export const ValueEditor: React.FC<Props> = ({
  path,
  defaultValue,
  onCancel,
  onUpdate,
}) => {
  // Value
  const [value, setValue] = useState<any>(defaultValue);
  const onValueChanged = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [setValue]
  );
  // Type
  const [type, setType] = useState<DataType>(getType(defaultValue));
  const onTypeChanged = useCallback(
    (event) => {
      const newType = event.target.value;
      setValue(cast(newType, value));
      setType(newType);
    },
    [value, setType]
  );
  // Buttons
  const onOKClicked = useCallback(() => {
    onUpdate(path, cast(type, value));
  }, [onUpdate, path, type, value]);
  const onCancelClicked = useCallback(() => {
    onCancel();
  }, [onCancel]);

  // Boolean (checkbox)
  const onCheckboxClicked = useCallback(
    (event) => {
      setValue(event.target.checked);
    },
    [setValue]
  );

  // Focus on editing
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [textFieldRef, type]);

  // Keyboard handling
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onOKClicked();
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
    <div className="value-editor d-flex">
      <div className="mr-1">
        {type === DataType.Object && (
          <ObjectType data={{}} path={[]} insert={false} />
        )}
        {type === DataType.Array && (
          <ObjectType data={[]} path={[]} insert={false} />
        )}
        {type === DataType.String && (
          <input
            type="text"
            className="text-editor form-control form-control-sm"
            value={value}
            onChange={onValueChanged}
            ref={textFieldRef}
            onKeyDown={onKeyDown}
          />
        )}
        {type === DataType.Number && (
          <input
            type="number"
            className="text-editor form-control form-control-sm"
            value={value}
            onChange={onValueChanged}
            ref={textFieldRef}
            onKeyDown={onKeyDown}
          />
        )}
        {type === DataType.Boolean && (
          <BooleanType
            data={value}
            readOnly={false}
            onChange={onCheckboxClicked}
          />
        )}
        {type === DataType.Null && <span className="null">null</span>}
      </div>
      <select
        value={type}
        onChange={onTypeChanged}
        className="form-control form-control-sm type-selector"
      >
        <option value={DataType.String}>string</option>
        <option value={DataType.Number}>number</option>
        <option value={DataType.Boolean}>boolean</option>
        <option value={DataType.Null}>null</option>
        <option value={DataType.Object}>object</option>
        <option value={DataType.Array}>array</option>
      </select>
      <span className="buttons">
        <button className="ok-button btn btn-sm btn-link" onClick={onOKClicked}>
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

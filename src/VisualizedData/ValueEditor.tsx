import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Path } from '../types';
import BooleanType from '../object/BooleanType';

enum DataType {
  Object = 'object',
  Array = 'array',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Null = 'null',
}

const getType = (value: any): DataType => {
  switch (typeof value) {
    case typeof 1:
      return DataType.Number;
    case typeof 'a':
      return DataType.String;
    case typeof true:
      return DataType.Boolean;
    case typeof null:
      return DataType.Null;
    case typeof []:
      return DataType.Array;
    default:
      return DataType.Object;
  }
};

const cast = (type: DataType, value: any): any => {
  const currentType = getType(value);
  switch (currentType) {
    case DataType.String:
      switch (type) {
        case DataType.Number:
          return parseInt(value) || 0;
        case DataType.Boolean:
          return value.length > 0;
        default:
          return value;
      }
    case DataType.Number:
      switch (type) {
        case DataType.String:
          return `${value}`;
        case DataType.Boolean:
          return value !== 0;
        default:
          return value;
      }
    case DataType.Boolean:
      switch (type) {
        case DataType.String:
          return value ? 'true' : 'false';
        case DataType.Number:
          return value ? 1 : 0;
        default:
          return value;
      }
    default:
      return value;
  }
};

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
    onUpdate(path, value);
  }, [onUpdate, path, value]);
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

  return (
    <div className="value-editor d-flex">
      <div className="mr-1">
        {type === DataType.Object && <div></div>}
        {type === DataType.Array && <div></div>}
        {type === DataType.String && (
          <input
            type="text"
            className="text-editor form-control form-control-sm"
            value={value}
            onChange={onValueChanged}
            ref={textFieldRef}
          />
        )}
        {type === DataType.Number && (
          <input
            type="number"
            className="text-editor form-control form-control-sm"
            value={value}
            onChange={onValueChanged}
            ref={textFieldRef}
          />
        )}
        {type === DataType.Boolean && (
          <BooleanType
            data={value}
            readOnly={false}
            onChange={onCheckboxClicked}
          />
        )}
        {type === DataType.Null && <span>null</span>}
      </div>
      <select
        value={type}
        onChange={onTypeChanged}
        className="form-control form-control-sm type-selector"
      >
        <option value={DataType.String}>string</option>
        <option value={DataType.Number}>number</option>
        <option value={DataType.Boolean}>boolean</option>
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

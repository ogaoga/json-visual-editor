import React, { useState, useCallback } from 'react';

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

interface Props {
  defaultValue: any;
  onCancel: () => void;
  onUpdate: (value: any) => void;
}

export const ValueEditor: React.FC<Props> = ({
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
      setType(event.target.value);
    },
    [setType]
  );
  // Buttons
  const onOKClicked = useCallback(() => {
    onUpdate(value);
  }, [value, onUpdate]);
  const onCancelClicked = useCallback(() => {
    onCancel();
  }, [onCancel]);

  return (
    <div className="value-editor d-flex">
      <div>
        {type === DataType.Object && <div></div>}
        {type === DataType.Array && <div></div>}
        {type === DataType.String && (
          <span>
            "<input type="text" value={value} onChange={onValueChanged} />"
          </span>
        )}
        {type === DataType.Number && (
          <span>
            <input type="number" value={value} onChange={onValueChanged} />
          </span>
        )}
        {type === DataType.Boolean && (
          <span>
            <input
              type="radio"
              checked={value === true}
              onChange={onValueChanged}
            />{' '}
            true
            <input
              type="radio"
              checked={value === false}
              onChange={onValueChanged}
            />{' '}
            false
          </span>
        )}
        {type === DataType.Null && <span>null</span>}
      </div>
      <select
        value={type}
        onChange={onTypeChanged}
        className="form-control form-control-sm"
      >
        <option value={DataType.Object}>object</option>
        <option value={DataType.Array}>array</option>
        <option value={DataType.String}>string</option>
        <option value={DataType.Number}>number</option>
        <option value={DataType.Boolean}>boolean</option>
        <option value={DataType.Null}>null</option>
      </select>
      <button className="ok-button btn btn-sm btn-link" onClick={onOKClicked}>
        <i className="fas fa-check-circle" />
      </button>
      <button
        className="cancel-button btn btn-sm btn-link"
        onClick={onCancelClicked}
      >
        <i className="fas fa-times-circle" />
      </button>
    </div>
  );
};

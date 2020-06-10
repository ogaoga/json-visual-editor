import React, { ChangeEvent } from 'react';

interface Props {
  data: boolean;
  readOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BooleanType: React.FC<Props> = ({ data, readOnly = true, onChange }) => {
  return (
    <label className="boolean-type">
      <input
        type="checkbox"
        checked={data}
        readOnly={readOnly}
        onChange={onChange}
      />
      <span>{data ? 'true' : 'false'}</span>
    </label>
  );
};

export default BooleanType;

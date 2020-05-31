import React from 'react';

interface Props {
  data: boolean;
}

const BooleanType: React.FC<Props> = ({ data }) => {
  return (
    <label className="boolean-type">
      <input
        type="checkbox"
        checked={data}
        readOnly
      />
      <span>{data ? 'true' : 'false'}</span>
    </label>
  );
};

export default BooleanType;

import React from 'react';

interface Props {
  data: boolean;
}

const BooleanType: React.FC<Props> = ({ data }) => {
  return (
    <label className="mdl-checkbox mdl-js-checkbox boolean-type">
      <input
        type="checkbox"
        checked={data}
        readOnly
        className="mdl-checkbox__input"
      />
      <span className="mdl-checkbox__label">{data ? 'true' : 'false'}</span>
    </label>
  );
};

export default BooleanType;

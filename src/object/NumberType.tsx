import React from 'react';

interface Props {
  data: number;
}

const NumberType: React.FC<Props> = ({ data }) => {
  return <span className="number-type">{data}</span>;
};

export default NumberType;

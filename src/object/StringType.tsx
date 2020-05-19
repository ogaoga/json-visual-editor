import React, { ReactElement } from 'react';
import validator from 'validator';

interface Props {
  data: string;
}

const StringType: React.FC<Props> = ({ data }) => {
  let result: ReactElement | string = '';
  if (validator.isURL(data)) {
    if (data.match(/\.(jpg|jpeg|png|gif)$/)) {
      result = (
        <a href={data} target="_blank" rel="noopener noreferrer">
          <img src={data} alt={data} />
          <br />
          <span>{data}</span>
        </a>
      );
    } else {
      result = (
        <a href={data} target="_blank" rel="noopener noreferrer">
          <span>{data}</span>
        </a>
      );
    }
  } else {
    result = `"${data}"`;
  }
  return <span className="string-type">{result}</span>;
};

export default StringType;

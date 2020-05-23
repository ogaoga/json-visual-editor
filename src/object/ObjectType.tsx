import React, { useState } from 'react';

import BooleanType from './BooleanType';
import NumberType from './NumberType';
import StringType from './StringType';
import Expander from '../Expander';

interface Props {
  data: any;
  level?: number;
}

const maxLevel = 5;

const ObjectType: React.FC<Props> = ({ data, level = 0 }) => {
  const [expanded, setExpanded] = useState(true);
  const nextLevel = level === maxLevel ? 0 : level + 1;

  const onChangeExpansion = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  let result = <></>;
  if (data === null) {
    // null
    result = <span className="null">null</span>;
  } else if (data !== null && typeof data === typeof {}) {
    // Object or Array
    let rows = Object.keys(data).map((name) => {
      return (
        <tr key={name}>
          <th>{name}</th>
          <td>
            <ObjectType data={data[name]} level={nextLevel} />
          </td>
        </tr>
      );
    });
    const typeLabel = Array.isArray(data) ? 'Array' : 'Object';
    const headerLabel = '[' + rows.length.toString() + ']';
    result = (
      <table>
        <thead data-level={level}>
          <tr>
            <th className="expand">
              <Expander
                defaultValue={expanded}
                onChangeExpansion={onChangeExpansion}
              />
            </th>
            <th className="objectType">{`${typeLabel} ${headerLabel}`}</th>
          </tr>
        </thead>
        <tbody className={expanded ? 'expanded' : ''}>{rows}</tbody>
      </table>
    );
  } else if (typeof data === typeof 1) {
    // Number
    result = <NumberType data={data} />;
  } else if (typeof data === typeof 'a') {
    // String
    result = <StringType data={data} />;
  } else if (typeof data === typeof true) {
    // Boolean
    result = <BooleanType data={data} />;
  } else {
    // something else
    result = <span className="undefined">{data}</span>;
  }
  return result;
};

export default ObjectType;

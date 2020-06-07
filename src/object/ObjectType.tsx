import React, { useState, useCallback } from 'react';

import BooleanType from './BooleanType';
import NumberType from './NumberType';
import StringType from './StringType';
import Expander from '../Expander';
import { EditButtons } from '../VisualizedData/EditButtons';
import { Path } from '../types';
import { ValueEditor } from '../VisualizedData/ValueEditor';

interface Props {
  data: any;
  path: Path;
  level?: number;
}

const maxLevel = 5;

const ObjectType: React.FC<Props> = ({ data, level = 0, path }) => {
  const [expanded, setExpanded] = useState(true);
  const nextLevel = level === maxLevel ? 0 : level + 1;

  const onChangeExpansion = (isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const [editable, setEditable] = useState(false);
  const onEditModeChanged = useCallback(
    (editable) => {
      setEditable(editable);
    },
    [setEditable]
  );

  const onUpdate = useCallback(
    (value) => {
      console.log(value);
      setEditable(false);
    },
    [setEditable]
  );

  const onCancel = useCallback(() => {
    setEditable(false);
  }, [setEditable]);

  let result = <></>;
  if (data === null) {
    // null
    result = <span className="null">null</span>;
  } else if (data !== null && typeof data === typeof {}) {
    // Object or Array
    let rows = Object.keys(data).map((name) => {
      const newPath = path === '' ? name : `${path}.${name}`;
      return (
        <tr key={name}>
          <th>
            <span title={newPath}>{name}</span>
          </th>
          <td>
            <div className="d-flex">
              <div className="flex-grow-1">
                {editable ? (
                  <ValueEditor
                    defaultValue={data[name]}
                    onUpdate={onUpdate}
                    onCancel={onCancel}
                  />
                ) : (
                  <ObjectType
                    data={data[name]}
                    level={nextLevel}
                    path={newPath}
                  />
                )}
              </div>
              <div>
                <EditButtons
                  data={data[name]}
                  path={newPath}
                  onEditModeChanged={onEditModeChanged}
                />
              </div>
            </div>
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
    result = (
      <span className="undefined" title={path}>
        {data}
      </span>
    );
  }
  return result;
};

export default ObjectType;

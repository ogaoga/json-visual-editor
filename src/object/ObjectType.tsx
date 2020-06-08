import React, { useState, useCallback } from 'react';

import BooleanType from './BooleanType';
import NumberType from './NumberType';
import StringType from './StringType';
import Expander from '../Expander';
import { EditButtons } from '../VisualizedData/EditButtons';
import { Path } from '../types';
import { ValueEditor } from '../VisualizedData/ValueEditor';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { dataSlice } from '../features/data/dataSlice';

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

  // for editing
  const editPath = useSelector((state: RootState) => state.data.editPath);

  const dispatch = useDispatch();
  const { setEditPath } = dataSlice.actions;
  const onUpdate = useCallback(
    (value) => {
      // TODO: update the value
      dispatch(setEditPath(null));
    },
    [setEditPath, dispatch]
  );
  const onCancel = useCallback(() => {
    dispatch(setEditPath(null));
  }, [dispatch, setEditPath]);

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
                {newPath === editPath ? (
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
                {editPath === null && (
                  <EditButtons data={data[name]} path={newPath} />
                )}
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

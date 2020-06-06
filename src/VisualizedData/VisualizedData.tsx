import React from 'react';
import ObjectType from '../object/ObjectType';
import { useSelector } from 'react-redux';
import { RootState } from '..';

const VisualizedData: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
  const text = useSelector((state: RootState) => state.textarea.localText);
  return (
    <div className="visualized-data">
      {text.length > 0 ? (
        <ObjectType data={data} path={''} />
      ) : (
        <div className="placeholder p-2">No data</div>
      )}
    </div>
  );
};

export default VisualizedData;

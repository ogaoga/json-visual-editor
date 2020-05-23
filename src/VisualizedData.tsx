import React from 'react';
import ObjectType from './object/ObjectType';
import { useSelector } from 'react-redux';
import { State } from './reducers';

const VisualizedData: React.FC = () => {
  const data = useSelector((state: State) => state.data);
  return <ObjectType data={data} />;
};

export default VisualizedData;

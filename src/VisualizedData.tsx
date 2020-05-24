import React from 'react';
import ObjectType from './object/ObjectType';
import { useSelector } from 'react-redux';
import { RootState } from '.';

const VisualizedData: React.FC = () => {
  const data = useSelector((state: RootState) => state.data.data);
  return <ObjectType data={data} />;
};

export default VisualizedData;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import SampleJson from '../../samples/simple.json';
import { Path } from '../../types';

interface State {
  data: any;
}

const getParentPathAndName = (path: Path): [Path, string] => {
  let parentPath = '';
  let name = '';
  const pathArray = path.split('.');
  if (pathArray.length === 1) {
    name = pathArray[0];
  } else if (pathArray.length > 1) {
    name = pathArray.pop()!;
    parentPath = pathArray.join('.');
  } else {
  }
  return [parentPath, name];
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state: State, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    pasteSample: (state: State) => {
      state.data = SampleJson;
    },
    deletePath: (state: State, action: PayloadAction<Path>) => {
      const path = action.payload;
      const [parentPath, name] = getParentPathAndName(path);
      const data = state.data;
      if (parentPath.length === 0) {
        // the traget is root object
        if (_.isArray(state.data)) {
          // Array
          state.data = data.filter((d, index) => `${index}` !== name);
        } else {
          // Object
          state.data = _.omit(data, name);
        }
      } else {
        // the traget is not root object
        const targetData = _.get(state.data, parentPath);
        if (_.isArray(targetData)) {
          // Array
          _.set(
            state.data,
            parentPath,
            targetData.filter((d, index) => index !== parseInt(name))
          );
        } else {
          // Object
          state.data = _.omit(state.data, path);
        }
      }
    },
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import SampleJson from '../../samples/simple.json';
import { Path, EditMode } from '../../types';

/**
 * State of dataSlice
 * @param data the data.
 * @param editPath the path of editable. `null` means no editable data.
 */

const getParentPathAndName = (path: Path): [Path, string] => {
  let parentPath: Path = [];
  let name = '';
  if (path.length === 1) {
    name = path[0];
  } else if (path.length > 1) {
    parentPath = _.initial(path);
    name = _.last<string>(path)!;
  } else {
  }
  return [parentPath, name];
};

interface State {
  data: any;
  editMode: EditMode | null;
}

const initialState: State = {
  data: null,
  editMode: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
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
        if (_.isArray(data)) {
          // Array
          state.data = data.filter((_, index) => `${index}` !== name);
        } else {
          // Object
          _.unset(state.data, path);
        }
      } else {
        // the traget is not root object
        const targetData = _.get(data, parentPath);
        if (_.isArray(targetData)) {
          // Array
          _.set(
            state.data,
            parentPath,
            targetData.filter((_, index) => index !== parseInt(name))
          );
        } else {
          // Object
          _.unset(state.data, path);
        }
      }
    },
    updateDataOfPath: (
      state: State,
      action: PayloadAction<{ data: any; path: Path }>
    ) => {
      const { data, path } = action.payload;
      _.set(state.data, path, data);
    },
    setEditMode: (state: State, action: PayloadAction<EditMode | null>) => {
      state.editMode = action.payload;
    },
    insertDataAfterPath: (state: State, action: PayloadAction<Path>) => {
      const [parentPath, name] = getParentPathAndName(action.payload);
      console.log(parentPath, name);
      // get
      const newData =
        parentPath.length === 0 ? state.data : _.get(state.data, parentPath);
      console.log(newData, typeof newData);
      // insert
      if (_.isArray(newData)) {
        const newName = name === '' ? 0 : parseInt(name) + 1;
        newData.splice(newName, 0, null);
      }
      // set
      _.set(state.data, parentPath, newData);
    },
    duplicatePath: (state: State, action: PayloadAction<Path>) => {
      const [parentPath, name] = getParentPathAndName(action.payload);
      // get
      const newData =
        parentPath.length === 0 ? state.data : _.get(state.data, parentPath);
      // insert
      if (_.isArray(newData)) {
        if (name === '') {
          newData.splice(0, 0, newData[0]);
        } else {
          const newName = parseInt(name) + 1;
          newData.splice(newName, 0, newData[name]);
        }
        // set
        _.set(state.data, parentPath, newData);
      } else {
        console.log(parentPath, name, newData);
        let newObject = {};
        const keys = Object.keys(newData);
        if (name === '') {
          if (keys.length > 0) {
            const key = `${keys[0]}--copy`;
            newObject[key] = newData[keys[0]];
          } else {
            const key = 'key';
            newObject[key] = null;
          }
        }
        keys.forEach((key) => {
          newObject[key] = newData[key];
          if (key === name) {
            newObject[`${key}--copy`] = newData[key];
          }
        });
        // set
        _.set(state.data, parentPath, newObject);
      }
    },
  },
});

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValidationClass } from '../../Constants';
import SampleJson from '../../samples/simple.json';

interface State {
  data: any;
  text: string;
  valid: ValidationClass;
}

const _setText = (state: State, action) => {
  let text = action.newText || '';
  let data = state.data;
  let valid = state.valid;
  if (text.length > 0) {
    try {
      // set data
      data = JSON.parse(text);
      // format
      text = JSON.stringify(data, null, 2);
      valid = ValidationClass.Valid;
    } catch (e) {
      data = null;
      valid = ValidationClass.Invalid;
    }
  } else {
    data = null;
    valid = ValidationClass.Invalid;
  }
  return [text, data, valid];
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    text: '',
    valid: ValidationClass.None,
  },
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      const [text, data, valid] = _setText(state, action);
      state.text = text;
      state.data = data;
      state.valid = valid;
    },
    resetValid: (state, action) => {
      state.valid = ValidationClass.None;
    },
    pasteSample: (state: State) => {
      const text = JSON.stringify(SampleJson, null, 2);
      state.text = text;
      state.data = SampleJson;
      state.valid = ValidationClass.Valid;
    },
  },
});

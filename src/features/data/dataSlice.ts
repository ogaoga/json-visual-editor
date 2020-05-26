import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SampleJson from '../../samples/simple.json';

interface State {
  data: any;
}

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
      const text = JSON.stringify(SampleJson, null, 2);
      state.data = SampleJson;
    },
  },
});

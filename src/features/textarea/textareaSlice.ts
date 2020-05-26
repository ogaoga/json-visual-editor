import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isTextareaClose: boolean;
  textCount: number;
}

const initialState = {
  isTextareaClose: false,
  textCount: 0,
};

export const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    toggleTextarea: (state: State) => {
      state.isTextareaClose = !state.isTextareaClose;
    },
    setTextCount: (state: State, action: PayloadAction<number>) => { 
      state.textCount = action.payload;
    },
  },
});

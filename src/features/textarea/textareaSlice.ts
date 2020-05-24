import { createSlice } from '@reduxjs/toolkit';

interface State {
  isTextareaClose: boolean;
}

const initialState = {
  isTextareaClose: false,
};

export const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    toggleTextarea: (state: State) => {
      state.isTextareaClose = !state.isTextareaClose;
    },
  },
});

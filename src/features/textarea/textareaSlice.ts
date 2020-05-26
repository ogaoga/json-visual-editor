import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isTextareaClose: boolean;
  localText: string;
}

const initialState = {
  isTextareaClose: false,
  localText: '',
};

export const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    toggleTextarea: (state: State) => {
      state.isTextareaClose = !state.isTextareaClose;
    },
    setLocalText: (state: State, action: PayloadAction<string>) => {
      state.localText = action.payload;
    },
  },
});

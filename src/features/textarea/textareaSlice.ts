import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isTextareaClose: boolean;
  localText: string;
  isValid: boolean;
}

const initialState = {
  isTextareaClose: false,
  localText: '',
  isValid: false,
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
      try {
        JSON.parse(action.payload)
        state.isValid = true;
      } catch (e) {
        state.isValid = false;
      }
    },
  },
});

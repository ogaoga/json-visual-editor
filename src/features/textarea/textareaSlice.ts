import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ValidityType {
  Valid = 'valid',
  Invalid = 'invalid',
  None = 'none',
}

const InitialFrameWidth = 400;

interface State {
  isTextareaClose: boolean;
  localText: string;
  validity: ValidityType;
  width: number;
}

const initialState: State = {
  isTextareaClose: false,
  localText: '',
  validity: ValidityType.None,
  width: InitialFrameWidth,
};

export const textareaSlice = createSlice({
  name: 'textarea',
  initialState,
  reducers: {
    toggleTextarea: (state: State) => {
      state.isTextareaClose = !state.isTextareaClose;
    },
    setLocalText: (state: State, action: PayloadAction<string>) => {
      const text = action.payload;
      state.localText = text;
      if (text.length > 0) {
        try {
          JSON.parse(action.payload);
          state.validity = ValidityType.Valid;
        } catch (e) {
          state.validity = ValidityType.Invalid;
        }
      } else {
        state.validity = ValidityType.None;
      }
    },
    setWidth: (state: State, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
  },
});

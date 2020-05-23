export enum ValidationClass {
  Valid = 'valid',
  Invalid = 'invalid',
  None = '',
};

export const Actions = {
  UpdateText: 'UPDATE_TEXT',
  SetText: 'SET_TEXT',
  ClearText: 'CLEAR_TEXT',
  CopyText: 'COPY_TEXT',
  PasteSample: 'PASTE_SAMPLE',
  SetAutoFormat: 'SET_AUTO_FORMAT',
  ResetValid: 'RESET_VALID',
  OpenTextarea: 'OPEN_TEXTAREA',
  CloseTextarea: 'CLOSE_TEXTAREA',
  ToggleTextarea: 'TOGGLE_TEXTAREA'
}

import { Actions } from '../Constants';

export const updateText = (newText: string) => {
  return {
    type: Actions.UpdateText,
    newText,
  };
};

export const setText = (newText: string) => {
  return {
    type: Actions.SetText,
    newText,
  };
};

export const clearText = () => {
  return {
    type: Actions.ClearText,
  };
};

export const copyText = () => {
  return {
    type: Actions.CopyText,
  };
};

export const pasteSample = () => {
  return {
    type: Actions.PasteSample,
  };
};

export const resetValid = () => {
  return {
    type: Actions.ResetValid,
  };
};

export const openTextarea = () => {
  return {
    type: Actions.OpenTextarea,
  };
};

export const closeTextarea = () => {
  return {
    type: Actions.CloseTextarea,
  };
};

export const toggleTextarea = () => {
  return {
    type: Actions.ToggleTextarea,
  };
};

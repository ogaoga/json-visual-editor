import {Actions} from '../Constants.js'

export const updateText = (newText) => {
  return {
    type: Actions.UpdateText,
    newText
  }
}

export const setText = (newText) => {
  return {
    type: Actions.SetText,
    newText
  }
}

export const clearText = () => {
  return {
    type: Actions.ClearText
  }
}

export const copyText = () => {
  return {
    type: Actions.CopyText
  }
}

export const pasteSample = () => {
  return {
    type: Actions.PasteSample
  }
}

export const setAutoFormat = (enabled) => {
  return {
    type: Actions.SetAutoFormat,
    enabled
  }
}

export const resetValid = () => {
  return {
    type: Actions.ResetValid
  }
}

export const updateData = (newData) => {
  return {
    type: 'UPDATE_DATA',
    newData
  }
}

export const updateText = (newText) => {
  return {
    type: 'UPDATE_TEXT',
    newText
  }
}

export const setText = (newText) => {
  return {
    type: 'SET_TEXT',
    newText
  }
}

export const clearText = () => {
  return {
    type: 'CLEAR_TEXT'
  }
}

export const copyText = () => {
  return {
    type: 'COPY_TEXT'
  }
}

export const pasteSample = () => {
  return {
    type: 'PASTE_SAMPLE'
  }
}

export const setAutoFormat = (enabled) => {
  return {
    type: 'SET_AUTO_FORMAT',
    enabled
  }
}

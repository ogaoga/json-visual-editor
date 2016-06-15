
import SampleJson   from 'raw!../samples/simple.json';

const initialState =  {
  data: null,
  text: '',
  autoFormat: false,
  isValid: false
}

const reducer = (state = initialState, action) => {

  const _setText = (state, action) => {
    let text = action.newText || ''
    let data = state.data
    let isValid = state.isValid
    if (text.length > 0) {
      try {
        // set data
        data = JSON.parse(text);
        // format
        if (state.autoFormat) {
          text = JSON.stringify(data, null, 2);
        }
        isValid = true
      } catch(e) {
        data = null
        isValid = false
      }
    }
    else {
      data = null
      isValid = false
    }
    return [text, data, isValid]
  }

  switch (action.type) {

  /*
   * Set and parse text, and update data
   */
  case 'SET_TEXT': {
    const [text, data, isValid] = _setText(state, action)
    // return new state
    return Object.assign({}, state, {
      text: text,
      data: data,
      isValid: isValid
    });
  }

  /*
   * Just update the textarea.
   */
  case 'UPDATE_TEXT': {
    return Object.assign({}, state, {
      text: action.newText
    });
  }

  case 'CLEAR_TEXT':
    return Object.assign({}, state, {
      text: '',
      data: null
    });

  case 'COPY_TEXT':
    return state;

  case 'PASTE_SAMPLE': {
    action.newText = SampleJson
    const [text, data, isValid] = _setText(state, action)
    return Object.assign({}, state, {
      text: text,
      data: data,
      isValid: isValid
    })
  }

  case 'SET_AUTO_FORMAT':
    return Object.assign({}, state, {
      autoFormat: action.enabled
    });

  default:
    return state;
  }
}

export default reducer


import SampleJson   from 'raw!../samples/simple.json';

const initialState =  {
  data: null,
  text: '',
  autoFormat: false,
  valid: ''
}

const reducer = (state = initialState, action) => {

  const _setText = (state, action) => {
    let text = action.newText || ''
    let data = state.data
    let valid = state.valid
    if (text.length > 0) {
      try {
        // set data
        data = JSON.parse(text);
        // format
        if (state.autoFormat) {
          text = JSON.stringify(data, null, 2);
        }
        valid = 'valid'
      } catch(e) {
        data = null
        valid = 'invalid'
      }
    }
    else {
      data = null
      valid = 'invalid'
    }
    return [text, data, valid]
  }

  switch (action.type) {

  /*
   * Set and parse text, and update data
   */
  case 'SET_TEXT': {
    const [text, data, valid] = _setText(state, action)
    // return new state
    return Object.assign({}, state, {
      text: text,
      data: data,
      valid: valid
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
    const [text, data, valid] = _setText(state, action)
    return Object.assign({}, state, {
      text: text,
      data: data,
      valid: valid
    })
  }

  case 'SET_AUTO_FORMAT':
    return Object.assign({}, state, {
      autoFormat: action.enabled
    });

  case 'RESET_VALID':
    return Object.assign({}, state, {
      valid: ''
    });

  default:
    return state;
  }
}

export default reducer

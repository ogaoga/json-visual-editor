
import SampleJson   from 'raw!../samples/simple.json';

const initialState =  {
  data: null,
  text: '',
  autoFormat: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case 'UPDATE_DATA':
    return state;

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

  case 'PASTE_SAMPLE':
    return Object.assign({}, state, {
      text: SampleJson,
      data: JSON.parse(SampleJson)
    })

  case 'SET_AUTO_FORMAT':
    return Object.assign({}, state, {
      autoFormat: action.enabled
    });

  default:
    return state;
  }
}

export default reducer

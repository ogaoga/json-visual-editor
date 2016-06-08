
/*
*/

const initialState =  {
  data: null,
  text: '',
  autoFormat: false
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

  case 'UPDATE_DATA':
    return state;

  case 'UPDATE_TEXT':
    return Object.assign({}, state, {
      text: action.newText
    });

  case 'CLEAR_TEXT':
    return Object.assign({}, state, {
      text: ''
    });

  case 'COPY_TEXT':
    return state;

  case 'PASTE_SAMPLE':
    return state;

  default:
    return state;
  }
}

export default reducer

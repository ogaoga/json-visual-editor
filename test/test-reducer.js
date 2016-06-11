import expect from 'expect';

import {updateText, clearText, setAutoFormat} from '../src/actions'
import reducer from '../src/reducers'

const params = [
  {
    title: 'updateText',
    action: updateText('abc'),
    expected: {
      data: null,
      text: 'abc',
      autoFormat: false
    }
  },
  {
    title: 'clearText',
    action: clearText(),
    expected: {
      data: null,
      text: '',
      autoFormat: false
    }
  },
  {
    title: 'setAutoFormat(true)',
    action: setAutoFormat(true),
    expected: {
      data: null,
      text: '',
      autoFormat: true
    }
  },
  {
    title: 'setAutoFormat(false)',
    action: setAutoFormat(false),
    expected: {
      data: null,
      text: '',
      autoFormat: false
    }
  },
]

describe('reducer', () => {

  let state = undefined

  params.forEach((param) => {
    it(param.title, () => {
      expect(reducer(state, param.action)).toEqual(param.expected);
    });
  });
});

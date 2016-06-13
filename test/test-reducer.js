import expect from 'expect';
import {describe, it} from 'mocha'

import {updateText, clearText, setAutoFormat, pasteSample} from '../src/actions'
import reducer from '../src/reducers'

import SampleJson   from 'raw!../src/samples/simple.json';

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
  {
    title: 'pasteSample()',
    action: pasteSample(),
    expected: {
      data: null,
      text: SampleJson,
      autoFormat: false
    }
  }
]

describe('reducer', () => {

  let state = undefined

  params.forEach((param) => {
    it(param.title, () => {
      expect(reducer(state, param.action)).toEqual(param.expected);
    });
  });
});

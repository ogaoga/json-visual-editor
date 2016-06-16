import expect from 'expect';
import {describe, it} from 'mocha'

import {updateText, clearText, setAutoFormat, pasteSample, setText} from '../src/actions'
import reducer from '../src/reducers'

import SampleJson   from 'raw!../src/samples/simple.json';
import {ValidationClass} from '../src/Constants.js'

const params = [
  {
    title: 'updateText',
    action: updateText('abc'),
    expected: {
      data: null,
      text: 'abc',
      autoFormat: false,
      valid: ValidationClass.None
    }
  },
  {
    title: 'clearText',
    action: clearText(),
    expected: {
      data: null,
      text: '',
      autoFormat: false,
      valid: ValidationClass.None
    }
  },
  {
    title: 'setAutoFormat(true)',
    action: setAutoFormat(true),
    expected: {
      data: null,
      text: '',
      autoFormat: true,
      valid: ValidationClass.None
    }
  },
  {
    title: 'setAutoFormat(false)',
    action: setAutoFormat(false),
    expected: {
      data: null,
      text: '',
      autoFormat: false,
      valid: ValidationClass.None
    }
  },
  {
    title: 'pasteSample()',
    action: pasteSample(),
    expected: {
      data: JSON.parse(SampleJson),
      text: SampleJson,
      autoFormat: false,
      valid: ValidationClass.Valid
    }
  },
  {
    title: 'setText (valid)',
    action: setText('["xyz"]'),
    expected: {
      data: ['xyz'],
      text: '["xyz"]',
      autoFormat: false,
      valid: ValidationClass.Valid
    }
  },
  {
    title: 'setText (invalid)',
    action: setText('{abcde: "xyz"}'),
    expected: {
      data: null,
      text: '{abcde: "xyz"}',
      autoFormat: false,
      valid: ValidationClass.Invalid
    }
  },
  {
    title: 'setText (auto format = false)',
    action: setText('[1, 2, 3]', true),
    expected: {
      data: [1, 2, 3],
      text: '[1, 2, 3]',
      autoFormat: false,
      valid: ValidationClass.Valid
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

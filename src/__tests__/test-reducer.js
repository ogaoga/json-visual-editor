import expect from 'expect';

import {updateText, clearText, setAutoFormat, pasteSample, setText, openTextarea, closeTextarea, toggleTextarea} from '../actions'
import reducer from '../reducers'
import SampleJson   from '../samples/simple.json';
import {ValidationClass} from '../Constants.js'

const defaults = {
  data: null,
  text: '',
  autoFormat: false,
  valid: ValidationClass.None,
  isTextareaClose: false
}

const params = [
  {
    title: 'updateText',
    action: updateText('abc'),
    expected: Object.assign({}, defaults, {
      text: 'abc'
    })
  },
  {
    title: 'clearText',
    action: clearText(),
    expected: defaults
  },
  {
    title: 'setAutoFormat(true)',
    action: setAutoFormat(true),
    expected: Object.assign({}, defaults, {
      autoFormat: true
    })
  },
  {
    title: 'setAutoFormat(false)',
    action: setAutoFormat(false),
    expected: defaults
  },
  {
    title: 'pasteSample()',
    action: pasteSample(),
    expected: Object.assign({}, defaults, {
      data: SampleJson,
      text: JSON.stringify(SampleJson),
      valid: ValidationClass.Valid
    })
  },
  {
    title: 'setText (valid)',
    action: setText('["xyz"]'),
    expected: Object.assign({}, defaults, {
      data: ['xyz'],
      text: '["xyz"]',
      valid: ValidationClass.Valid
    })
  },
  {
    title: 'setText (invalid)',
    action: setText('{abcde: "xyz"}'),
    expected: Object.assign({}, defaults, {
      text: '{abcde: "xyz"}',
      valid: ValidationClass.Invalid
    })
  },
  {
    title: 'setText (auto format = false)',
    action: setText('[1, 2, 3]', true),
    expected: Object.assign({}, defaults, {
      data: [1, 2, 3],
      text: '[1, 2, 3]',
      valid: ValidationClass.Valid
    })
  },
  {
    title: 'openTextarea',
    action: openTextarea(),
    expected: Object.assign({}, defaults, {
      isTextareaClose: false
    })
  },
  {
    title: 'closeTextarea',
    action: closeTextarea(),
    expected: Object.assign({}, defaults, {
      isTextareaClose: true
    })
  },
  {
    title: 'toggleTextarea (false -> true)',
    action: toggleTextarea(),
    expected: Object.assign({}, defaults, {
      isTextareaClose: true
    })
  }
]

describe('reducer', () => {

  let state = undefined

  params.forEach((param) => {
    it(param.title, () => {
      let result = reducer(state, param.action)
      expect(result).toEqual(param.expected);
    });
  });
});

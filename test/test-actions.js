import expect from 'expect';
import {describe, it} from 'mocha'

import {
  updateText, setText, clearText, copyText, pasteSample, setAutoFormat, resetValid,
  openTextarea, closeTextarea, toggleTextarea
} from '../src/actions/index'
import {Actions} from '../src/Constants.js'

let params = [
  {
    title: 'updateText',
    actual: updateText('abc').type,
    expected: Actions.UpdateText
  },
  {
    title: 'setText',
    actual: setText('abc').type,
    expected: Actions.SetText
  },
  {
    title: 'clearText',
    actual: clearText().type,
    expected: Actions.ClearText
  },
  {
    title: 'copyText',
    actual: copyText().type,
    expected: Actions.CopyText
  },
  {
    title: 'pasteSample',
    actual: pasteSample().type,
    expected: Actions.PasteSample
  },
  {
    title: 'setAutoFormat',
    actual: setAutoFormat(true).type,
    expected: Actions.SetAutoFormat
  },
  {
    title: 'resetValid',
    actual: resetValid().type,
    expected: Actions.ResetValid
  },
  {
    title: 'openTextarea',
    actual: openTextarea().type,
    expected: Actions.OpenTextarea
  },
  {
    title: 'closeTextarea',
    actual: closeTextarea().type,
    expected: Actions.CloseTextarea
  },
  {
    title: 'toggleTextarea',
    actual: toggleTextarea().type,
    expected: Actions.ToggleTextarea
  }
];

describe('actions', () => {
  params.forEach((param) => {
    it(param.title, () => {
      expect(param.actual).toEqual(param.expected);
    });
  });
});

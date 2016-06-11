import expect from 'expect';

import {updateText, setAutoFormat} from '../src/actions/index'

let params = [
  {
    title: 'updateText',
    actual: updateText('abc').type,
    expected: 'UPDATE_TEXT'
  },
  {
    title: 'setAutoFormat',
    actual: setAutoFormat(true).type,
    expected: 'SET_AUTO_FORMAT'
  },
];

describe('actions', () => {
  params.forEach((param) => {
    it(param.title, () => {
      expect(param.actual).toEqual(param.expected);
    });
  });
});

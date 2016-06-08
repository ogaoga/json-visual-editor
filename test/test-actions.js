import expect from 'expect';

import {updateText} from '../src/actions/index'

let params = [
  {
    title: 'updateText',
    actual: updateText('abc').type,
    expected: 'UPDATE_TEXT'
  }
];

describe('actions', () => {
  params.forEach((param) => {
    it(param.title, () => {
      expect(param.actual).toEqual(param.expected);
    });
  });
});

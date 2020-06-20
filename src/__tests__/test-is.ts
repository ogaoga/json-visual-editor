/**
 * @jest-environment node
 */

import {
  isNumber,
  isString,
  isNull,
  isBoolean,
  isArray,
  isObject,
} from '../utils/is';

const testValues = [
  0,
  1,
  '',
  'a',
  true,
  false,
  [],
  ['a'],
  {},
  { a: 'a' },
  null,
  undefined,
];

const tests = [
  {
    title: 'isNumber test',
    testFunction: isNumber,
    expectations: [
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    title: 'isString test',
    testFunction: isString,
    expectations: [
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    title: 'isBoolean test',
    testFunction: isBoolean,
    expectations: [
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
  {
    title: 'isArray test',
    testFunction: isArray,
    expectations: [
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
    ],
  },
  {
    title: 'isObject test',
    testFunction: isObject,
    expectations: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
    ],
  },
  {
    title: 'isNull test',
    testFunction: isNull,
    expectations: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
    ],
  },
];

describe('is functions', () => {
  tests.forEach((test) => {
    const { testFunction, expectations, title } = test;
    testValues.forEach((value, index) => {
      const expected = expectations[index];
      it(`${title}: ${value} => ${expected}`, () => {
        expect(testFunction(value)).toEqual(expected);
      });
    });
  });
});

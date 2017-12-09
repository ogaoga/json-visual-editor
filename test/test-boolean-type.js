import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import {describe, it} from 'mocha'

import BooleanType from '../src/object/BooleanType.jsx'

let params = [
  {
    title: 'Display checked checkbox and "true"',
    actual: (<BooleanType data={true} />),
    expected: (
      <label className="mdl-checkbox mdl-js-checkbox boolean-type">
        <input type="checkbox" readOnly={true} checked={true} className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">true</span>
      </label>
    )
  },
  {
    title: 'Display unchecked checkbox and "false"',
    actual: (<BooleanType data={false} />),
    expected: (
      <label className="mdl-checkbox mdl-js-checkbox boolean-type">
        <input type="checkbox" readOnly={true} checked={false} className="mdl-checkbox__input" />
        <span className="mdl-checkbox__label">false</span>
      </label>
    )
  }
];

describe('BooleanType Component', () => {
  const renderer = new ShallowRenderer();
  params.forEach((param) => {
    it(param.title, () => {
      renderer.render(param.actual);
      const actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqualJSX(expectedElement);
    });
  });
});

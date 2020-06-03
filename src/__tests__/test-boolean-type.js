import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import BooleanType from '../object/BooleanType'

let params = [
  {
    title: 'Display checked checkbox and "true"',
    actual: (<BooleanType data={true} />),
    expected: (
      <label className="boolean-type">
        <input type="checkbox" readOnly={true} checked={true} />
        <span>true</span>
      </label>
    )
  },
  {
    title: 'Display unchecked checkbox and "false"',
    actual: (<BooleanType data={false} />),
    expected: (
      <label className="boolean-type">
        <input type="checkbox" readOnly={true} checked={false} />
        <span>false</span>
      </label>
    )
  }
];

describe('BooleanType Component', () => {
  params.forEach((param) => {
    const renderer = new ShallowRenderer();
    it(param.title, () => {
      renderer.render(param.actual);
      const actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqual(expectedElement);
    });
  });
});

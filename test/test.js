import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import BooleanType from '../src/object/BooleanType.jsx'

describe('BooleanType Component', () => {
  let renderer = createRenderer();
  it('Display checked checkbox and "true"', () => {
    renderer.render(
        <BooleanType data={true} />
    )
    let actualElement = renderer.getRenderOutput();
    let expectedElement = (
      <label>
        <input type="checkbox" checked />
        <span>true</span>
      </label>
    );
    expect(actualElement).toIncludeJSX(expectedElement);
  });
});

import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import {describe, it} from 'mocha'

import Expander from '../src/Expander.jsx'

let params = [
  {
    title: 'Display expander (expaneded).',
    actual: (<Expander defaultValue={true} />),
    expected: (
      <a href="#" className="component-expander expanded" onClick={function onClick() {}}>
        <i className="material-icons">expand_more</i>
      </a>
    )
  },
  {
    title: 'Display expander (closeed).',
    actual: (<Expander defaultValue={false} />),
    expected: (
      <a href="#" className="component-expander " onClick={function onClick() {}}>
        <i className="material-icons">expand_more</i>
      </a>
    )
  }
];


describe('Expander Component', () => {
  const renderer = new ShallowRenderer();
  params.forEach((param) => {
    it(param.title, () => {
      renderer.render(param.actual);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqual(expectedElement);
    });
  });
});

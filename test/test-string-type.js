import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import {describe, it} from 'mocha'

import StringType from '../src/object/StringType.jsx'

let params = [
  {
    title: 'Normal String',
    actual: (<StringType data="Hello, World!" />),
    expected: (
      <span className="string-type">
        "Hello, World!"
      </span>
    )
  },
  {
    title: 'URL String',
    actual: (<StringType data="https://github.com/ogaoga/json-visual-editor" />),
    expected: (
      <span className="string-type">
        <a href="https://github.com/ogaoga/json-visual-editor" target="_blank">
          <span>https://github.com/ogaoga/json-visual-editor</span>
        </a>
      </span>
    )
  },
  {
    title: 'Image URL',
    actual: (<StringType data="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png" />),
    expected: (
      <span className="string-type">
        <a href="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png" target="_blank">
          <img src="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png" /><br />
          <span>https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png</span>
        </a>
      </span>
    )
  }
];

describe('StringType Component', () => {
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

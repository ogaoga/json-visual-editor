import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import StringType from '../object/StringType';

let params = [
  {
    title: 'Normal String',
    actual: <StringType data="Hello, World!" />,
    expected: <span className="string-type">"Hello, World!"</span>,
  },
  {
    title: 'URL String',
    actual: <StringType data="https://github.com/ogaoga/json-visual-editor" />,
    expected: (
      <span className="string-type">
        <a
          href="https://github.com/ogaoga/json-visual-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>https://github.com/ogaoga/json-visual-editor</span>
        </a>
      </span>
    ),
  },
  {
    title: 'Image URL',
    actual: (
      <StringType data="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png" />
    ),
    expected: (
      <span className="string-type">
        <a
          href="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png"
            alt="https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png"
          />
          <br />
          <span>
            https://raw.githubusercontent.com/ogaoga/json-visual-editor/develop/resources/json-visual-editor.png
          </span>
        </a>
      </span>
    ),
  },
];

describe('StringType Component', () => {
  params.forEach((param) => {
    const renderer = new ShallowRenderer();
    it(param.title, () => {
      renderer.render(param.actual);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqual(expectedElement);
    });
  });
});

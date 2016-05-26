import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import StringType  from '../src/object/StringType.jsx'
import NumberType  from '../src/object/NumberType.jsx'
import BooleanType from '../src/object/BooleanType.jsx'
import ObjectType  from '../src/object/ObjectType.jsx'

let params = [
  {
    title: 'Display true',
    actual: (<ObjectType data={true} />),
    expected: (<BooleanType data={true} />)
  },
  {
    title: 'Display false',
    actual: (<ObjectType data={false} />),
    expected: (<BooleanType data={false} />)
  },
  {
    title: 'Display array',
    actual: (<ObjectType data={[null, "abc", 123]} />),
    expected: (
      <table>
        <tbody>
          <tr>
            <th>0</th>
            <td>
              <ObjectType data={null} />
            </td>
          </tr>
          <tr>
            <th>1</th>
            <td>
              <ObjectType data={"abc"} />
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <ObjectType data={123} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
];

describe('ObjectType Component', () => {
  let renderer = createRenderer();
  params.forEach((param) => {
    it(param.title, () => {
      renderer.render(param.actual);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqualJSX(expectedElement);
    });
  });
});

import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import {describe, it} from 'mocha'

import BooleanType from '../src/object/BooleanType.jsx'
import ObjectType  from '../src/object/ObjectType.jsx'
import Expander    from '../src/Expander.jsx'

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
    actual: (<ObjectType data={[null, 'abc', 123]} />),
    expected: (
      <table>
        <thead>
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function noRefCheck() {}}
              />
            </th>
            <th className="objectType">
              Array [3]
            </th>
          </tr>
        </thead>
        <tbody className="expanded">
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
  params.forEach((param) => {
    let renderer = createRenderer();
    it(param.title, () => {
      renderer.render(param.actual);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqualJSX(expectedElement);
    });
  });
});

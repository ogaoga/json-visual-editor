import React from 'react';
import expect from 'expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import {describe, it} from 'mocha'

import BooleanType from '../src/object/BooleanType.jsx'
import ObjectType  from '../src/object/ObjectType.jsx'
import Expander    from '../src/Expander.jsx'

//import reducer from '../src/reducers'
//import { createStore } from 'redux'
//import { Provider }    from 'react-redux'
//const store = createStore(reducer)

const params = [
  /*
  {
    title: 'Prepare',
    actual: (
      <Provider store={store}>
        <ObjectType />
      </Provider>
    ),
    expected: (<ObjectType />)
  },
  */
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
                onChangeExpansion={function onChangeExpansion() {}}
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
              <ObjectType data={'abc'} />
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
  },
  {
    title: 'Display object',
    actual: (<ObjectType data={{abc: 123, 'xyz': 'abc'}} />),
    expected: (
      <table>
        <thead>
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function onChangeExpansion() {}}
              />
            </th>
            <th className="objectType">
              Object [2]
            </th>
          </tr>
        </thead>
        <tbody className="expanded">
          <tr>
            <th>abc</th>
            <td>
              <ObjectType data={123} />
            </td>
          </tr>
          <tr>
            <th>xyz</th>
            <td>
              <ObjectType data={'abc'} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
];

describe('ObjectType Component', () => {
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

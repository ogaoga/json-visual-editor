import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BooleanType from '../object/BooleanType';
import ObjectType from '../object/ObjectType';
import Expander from '../Expander';

Enzyme.configure({ adapter: new Adapter() });

const params = [
  {
    title: 'Display true',
    actual: <ObjectType data={true} />,
    expected: <BooleanType data={true} />,
  },
  {
    title: 'Display false',
    actual: <ObjectType data={false} />,
    expected: <BooleanType data={false} />,
  },
  {
    title: 'Display array',
    actual: <ObjectType data={[null, 'abc', 123]} />,
    expected: (
      <table>
        <thead data-level="0">
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function onChangeExpansion() {}}
              />
            </th>
            <th className="objectType">Array [3]</th>
          </tr>
        </thead>
        <tbody className="expanded">
          <tr>
            <th>0</th>
            <td className="d-flex">
              <div className="flex-grow-1">
                <ObjectType data={null} />
              </div>
            </td>
          </tr>
          <tr>
            <th>1</th>
            <td className="d-flex">
              <div className="flex-grow-1">
                <ObjectType data={'abc'} />
              </div>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td className="d-flex">
              <div className="flex-grow-1">
                <ObjectType data={123} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Display object',
    actual: <ObjectType data={{ abc: 123, xyz: 'abc' }} />,
    expected: (
      <table>
        <thead data-level="0">
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function onChangeExpansion() {}}
              />
            </th>
            <th className="objectType">Object [2]</th>
          </tr>
        </thead>
        <tbody className="expanded">
          <tr>
            <th>abc</th>
            <td className="d-flex">
              <div className="flex-grow-1">
                <ObjectType data={123} />
              </div>
            </td>
          </tr>
          <tr>
            <th>xyz</th>
            <td className="d-flex">
              <div className="flex-grow-1">
                <ObjectType data={'abc'} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

describe('ObjectType Component', () => {
  params.forEach((param) => {
    it(param.title, () => {
      const actual = Enzyme.shallow(param.actual).html();
      const expected = Enzyme.shallow(param.expected).html();
      expect(actual).toEqual(expected);
    });
  });
});

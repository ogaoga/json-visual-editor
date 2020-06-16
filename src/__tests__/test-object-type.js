/**
 * @jest-environment node
 */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import BooleanType from '../object/BooleanType';
import ObjectType from '../object/ObjectType';
import Expander from '../Expander';
import { EditButtons } from '../VisualizedData/EditButtons';

import { textareaSlice } from '../features/textarea/textareaSlice';
import { dataSlice } from '../features/data/dataSlice';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

// Redux
const rootReducer = combineReducers({
  data: dataSlice.reducer,
  textarea: textareaSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });

const params = [
  {
    title: 'Display true',
    actual: <ObjectType data={true} path={[]} />,
    expected: <BooleanType data={true} path={[]} />,
  },
  {
    title: 'Display false',
    actual: <ObjectType data={false} path={[]} />,
    expected: <BooleanType data={false} path={[]} />,
  },
  {
    title: 'Display array',
    actual: <ObjectType data={[null, 'abc', 123]} path={[]} />,
    expected: (
      <table className="">
        <thead data-level="0">
          <tr>
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name=""></i>
            </td>
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
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name="0"></i>
            </td>
            <th>
              <span title="0">0</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={null} />
                </div>
                <div>
                  <EditButtons data={null} path={[]} hidden={false} />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name="1"></i>
            </td>
            <th>
              <span title="1">1</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={'abc'} />
                </div>
                <div>
                  <EditButtons data={'abc'} path={[]} hidden={false} />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name="2"></i>
            </td>
            <th>
              <span title="2">2</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={123} />
                </div>
                <div>
                  <EditButtons data={123} path={[]} hidden={false} />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Display array w/o insert buttons',
    actual: <ObjectType data={[123]} path={[]} insert={false} />,
    expected: (
      <table className="no-margin">
        <thead data-level="0">
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function onChangeExpansion() {}}
              />
            </th>
            <th className="objectType">Array [1]</th>
          </tr>
        </thead>
        <tbody className="expanded">
          <tr>
            <th>
              <span title="0">0</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={123} />
                </div>
                <div>
                  <EditButtons data={123} path={[]} hidden={false} />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Display object',
    actual: <ObjectType data={{ abc: 123, xyz: 'abc' }} path={['path']} />,
    expected: (
      <table className="">
        <thead data-level="1">
          <tr>
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name=""></i>
            </td>
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
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name="abc"></i>
            </td>
            <th>
              <span title="path.abc">abc</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={123} path={['path', 'name']} />
                </div>
                <div>
                  <EditButtons
                    data={123}
                    path={['path', 'name']}
                    hidden={false}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="button-cell">
              <i className="fas fa-plus-circle" data-name="xyz"></i>
            </td>
            <th>
              <span title="path.xyz">xyz</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={'abc'} />
                </div>
                <div>
                  <EditButtons
                    data={'abc'}
                    path={['path', 'name']}
                    hidden={false}
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: 'Display object w/o insert buttons',
    actual: <ObjectType data={{ abc: 123 }} path={['path']} insert={false} />,
    expected: (
      <table className="no-margin">
        <thead data-level="1">
          <tr>
            <th className="expand">
              <Expander
                defaultValue={true}
                onChangeExpansion={function onChangeExpansion() {}}
              />
            </th>
            <th className="objectType">Object [1]</th>
          </tr>
        </thead>
        <tbody className="expanded">
          <tr>
            <th>
              <span title="path.abc">abc</span>
            </th>
            <td>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <ObjectType data={123} path={['path', 'name']} />
                </div>
                <div>
                  <EditButtons
                    data={123}
                    path={['path', 'name']}
                    hidden={false}
                  />
                </div>
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
      const actual = Enzyme.shallow(
        <Provider store={store} children={param.actual} />
      ).html();
      const expected = Enzyme.shallow(
        <Provider store={store} children={param.expected} />
      ).html();
      expect(actual).toEqual(expected);
    });
  });
});

import React from 'react';
import expect from 'expect';
import {describe, it} from 'mocha'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
  params.forEach((param) => {
    it(param.title, () => {
      const actual = Enzyme.shallow(param.actual).html();
      const expected = Enzyme.shallow(param.expected).html();
      expect(actual).toEqual(expected);
    });
  });
});

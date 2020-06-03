import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Expander from '../Expander';

Enzyme.configure({ adapter: new Adapter() });

let params = [
  {
    title: 'Display expander (expaneded).',
    actual: <Expander defaultValue={true} />,
    expected: (
      <button
        className={[
          'component-expander',
          'expanded',
          'btn',
          'btn-link'
        ].join(' ')}
        onClick={function onClick() {}}
      >
        <i className="fas fa-chevron-down" />
      </button>
    ),
  },
  {
    title: 'Display expander (closeed).',
    actual: <Expander defaultValue={false} />,
    expected: (
      <button
        className={[
          'component-expander',
          '',
          'btn',
          'btn-link'
        ].join(' ')}
        onClick={function onClick() {}}
      >
        <i className="fas fa-chevron-down" />
      </button>
    ),
  },
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

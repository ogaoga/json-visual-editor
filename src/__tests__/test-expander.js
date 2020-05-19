import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Expander from '../Expander.jsx';

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
          'mdl-button',
          'mdl-js-button',
        ].join(' ')}
        onClick={function onClick() {}}
      >
        <i className="material-icons">expand_more</i>
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
          'mdl-button',
          'mdl-js-button',
        ].join(' ')}
        onClick={function onClick() {}}
      >
        <i className="material-icons">expand_more</i>
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

import React from 'react';
import ReactDOM from 'react-dom';

import TextArea from './TextArea';
import ControlsArea from './ControlsArea';
import VisualizedData from './VisualizedData';
import AdArea from './AdArea';

export default class Page extends React.Component {
	render() {
		return (
      <div className="container">
        <section className="column json-column">
          <TextArea />
          <ControlsArea />
        </section>
			  <section className="column data-column">
          <VisualizedData />
        </section>
			  <section className="column ad-column">
          <AdArea />
        </section>
      </div>
		);
	}
}

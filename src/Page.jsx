import React from 'react';
import ReactDOM from 'react-dom';

import TextArea from './TextArea';
import ControlsArea from './ControlsArea';
import VisualizedData from './VisualizedData';
import AdArea from './AdArea';

export default class Page extends React.Component {
	render() {
		return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
		        <h1 className="mdl-layout-title">JSON Visual Editor</h1>
          </div>
        </header>
        <main className="container mdl-layout__content">
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
        </main>
        <footer>
          <span>Copyright &copy; 2016 ogaoga.org</span>
        </footer>
      </div>
		);
	}
}

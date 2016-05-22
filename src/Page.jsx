import React    from 'react';
import ReactDOM from 'react-dom';

import TextArea       from './TextArea';
import ControlsArea   from './ControlsArea';
import VisualizedData from './VisualizedData';
import AdArea         from './AdArea';

export default class Page extends React.Component {
	render() {
		return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
		        <h1 className="mdl-layout-title">JSON Visual Editor</h1>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <section className="json-text mdl-cell mdl-cell--4-col">
              <TextArea data={this.props.data} updateData={this.props.updateData} />
              <ControlsArea />
            </section>
            <section className="visualized-data mdl-cell mdl-cell--8-col">
              <VisualizedData data={this.props.data} />
            </section>
          </div>
        </main>
        <footer>
          <span>Copyright &copy; 2016 ogaoga.org</span>
        </footer>
      </div>
		);
	}
}

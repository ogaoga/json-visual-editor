import React    from 'react';

import TextArea       from './TextArea';
import VisualizedData from './VisualizedData';
import Closer         from './Closer';

class Page extends React.Component {
  render() {
    let classes = {
      jsonText:   ['json-text',       'mdl-cell', 'mdl-cell--8-col-tablet'],
      visualized: ['visualized-data', 'mdl-cell', 'mdl-cell--8-col-tablet']
    }
    if (this.props.isTextareaClose) {
      classes.jsonText.push(  'closed', 'mdl-cell--1-col')
      classes.visualized.push('closed', 'mdl-cell--11-col')
    }
    else {
      classes.jsonText.push(  'mdl-cell--4-col')
      classes.visualized.push('mdl-cell--8-col')
    }
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <h1 className="mdl-layout-title">JSON Visual Editor</h1>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="https://github.com/ogaoga/json-visual-editor/issues/new"><i className="material-icons">feedback</i> Feedback</a>
            </nav>
          </div>
        </header>
        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <section className={classes.jsonText.join(' ')}>
              <TextArea />
              <Closer />
            </section>
            <section className={classes.visualized.join(' ')}>
              <VisualizedData />
            </section>
          </div>
        </main>
        <footer>
          <div>
            <span><a href="https://github.com/ogaoga/json-visual-editor">Source code on GitHub</a></span>
            <span> | </span>
            <span><a href="http://qiita.com/ogaoga/items/1dae5586601e6900c3f1">Development guide on Qiita</a></span>
          </div>
          <div>
            <span>Copyright &copy; 2016 - 2017 ogaoga.org</span>
          </div>
        </footer>
      </div>
    );
  }
}

import { connect }   from 'react-redux'

export default connect(
  (state) => {
    return {
      isTextareaClose: state.isTextareaClose
    }
  }
)(Page)

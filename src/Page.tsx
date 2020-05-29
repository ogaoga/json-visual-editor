import React from 'react';
import { useSelector } from 'react-redux';
import TextArea from './TextArea';
import VisualizedData from './VisualizedData';
// import Closer from './Closer';
import { RootState } from './index';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page: React.FC = () => {
  const isTextareaClose = useSelector(
    (state: RootState) => state.textarea.isTextareaClose
  );
  let classes = {
    jsonText: ['json-text', 'mdl-cell', 'mdl-cell--8-col-tablet'],
    visualized: ['visualized-data', 'mdl-cell', 'mdl-cell--8-col-tablet'],
  };
  if (isTextareaClose) {
    classes.jsonText.push('closed', 'mdl-cell--1-col');
    classes.visualized.push('closed', 'mdl-cell--11-col');
  } else {
    classes.jsonText.push('mdl-cell--4-col');
    classes.visualized.push('mdl-cell--8-col');
  }
  return (
    <>
      <Header />
      <main className="d-flex flex-row flex-grow-1">
        <div className="leading-side d-flex flex-column">
          <section className="flex-grow-1">
            <TextArea />
            {/* <Closer /> */}
          </section>
        </div>
        <div className="trailing-side d-flex flex-column">
          <div className="flex-grow-1">
            <div className="scroll-wrapper">
              <VisualizedData />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

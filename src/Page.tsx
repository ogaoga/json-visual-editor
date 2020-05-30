import React from 'react';
import TextArea from './TextArea';
import VisualizedData from './VisualizedData';
import { Footer } from './Footer';
import { Header } from './Header';

export const Page: React.FC = () => {
  return (
    <>
      <Header />
      <main className="d-flex flex-row flex-grow-1">
        <div className="leading-side d-flex flex-column">
          <section className="flex-grow-1">
            <TextArea />
          </section>
        </div>
        <div className="adjuster"></div>
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

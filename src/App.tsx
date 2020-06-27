import React, { useState, useEffect } from 'react';
import { Page } from './Page';

const App: React.FC = () => {
  const [previousEvent, setPreviousEvent] = useState<string | null>(null);

  useEffect(() => {
    let body = document.getElementsByTagName('body')[0];
    body.addEventListener('drop', (e) => {
      /*
      if (e.target.id !== 'json-text') {
        e.preventDefault();
        e.stopPropagation();
      }
      */
      e.preventDefault();
      e.stopPropagation();

      setPreviousEvent('drop');
      body.classList.remove('dragging');
    });
    body.addEventListener('dragover', (e) => {
      if (previousEvent === 'dragenter') {
        body.classList.add('dragging');
      }
      setPreviousEvent('dragover');
      e.preventDefault();
      return false;
    });
    body.addEventListener('dragenter', () => {
      setPreviousEvent('dragenter');
    });
    body.addEventListener('dragleave', () => {
      if (previousEvent === 'dragover') {
        body.classList.remove('dragging');
      }
      setPreviousEvent('dragleave');
    });
  }, [previousEvent]);

  return <Page />;
};

export default App;

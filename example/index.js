import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactCV from 'react-cv';
import { CVData } from './data';

const App = () => {
  return (
    <ReactCV
      {...CVData}
    />
  );
};

const container = document.getElementById('app');
const root = createRoot(container)
root.render(<App />);

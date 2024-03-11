import React from 'react';
import ReactDOM from 'react-dom/client';
import MultiSelect from './MultiSelect';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <StrictMode>
    <MultiSelect />
  </StrictMode>
);

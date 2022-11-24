import React from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app1';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

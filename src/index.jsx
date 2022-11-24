import React from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './app1';

const container = document.getElementById('root');
const root = createRoot(container);

const greetMessage = 'Hola';

App.getDerivedStateFromProps = (nextProps, prevState) => ({
  greet: `${greetMessage} ${nextProps.name}`,
});

root.render(<App name="yagnesh" />);

/* import { counter } from './app';

const obj = {
  a: 1,
  b: 2,
};

const greet = name => `hello ${name}`;

class Animal {
  makeSound() {
    return 'bow wow';
  }
}

const animal = new Animal();

console.log(animal.makeSound());

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(counter()); */

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<h1>Hello React?</h1>);

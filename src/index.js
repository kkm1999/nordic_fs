import { counter } from './app';

const obj = {
  a: 1,
  b: 2,
};


class Animal {
  makeSound() {
    return 'bow wow';
  }
}

const animal = new Animal();

console.log(animal.makeSound());

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(counter());

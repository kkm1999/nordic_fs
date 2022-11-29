import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';
export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      todoItem: null,
      
    };


  increment = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  decrement = () => {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  };


  render() {
    return (
    <div>
      <h1 id="heading">{greet}</h1>
    <h2>{todoItem?.title}</h2>
    <button type="button" onClick={this.increment}>
      +
    </button>
    <p>{counter}</p>
    <button type="button" onClick={this.decrement}>
      -
    </button>
    {counter < 10 && <Child1 counter={counter} />}
    <Child2 /></div>);
  }
}
}
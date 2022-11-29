import React, { Component } from 'react';

// create a component which has two child component
// and each child component has click evnt.

// if any error occurs during this click we have to handle this on parent component

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
        <h1 className="text-red-400 text-3xl">Index</h1>
      </div>
    );
  }
}
}
import React, { Component, PureComponent } from 'react';

export default class Child1 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }
  componentDidMount() {
    document.addEventListener('mouseMove', Child1.mouseMove);
    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseMove', Child1.mouseMove);
    this.interval = setInterval(() => {
      clearInterval(this.interval);
    });
  }

  render() {
    const { counter } = this.props;
    console.log('child 1 render');
    return (
      <div>
        <h1>Child1</h1>
        <h2>{counter}</h2>
      </div>
    );
  }
}

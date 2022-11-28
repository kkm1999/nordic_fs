import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';


const Child2 = () => {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this.nextProps,nextState);

  }
  console.log('child 2 render');
  return <div>Child2</div>;
};

export default Child2;

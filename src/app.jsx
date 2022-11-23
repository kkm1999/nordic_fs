// modules.exports = {
//   counter,
// };
import React from 'react';

/* export function counter() {
  return 'hello';
} */

const bgcolor = 'yellow';
const clr = 'red';

function App({ name, designation }) {
  return (
    <>
      <div>
        <h1
          className="btn"
          style={{
            backgroundColor: bgcolor,
            color: clr,
          }}
        >
          {name}
        </h1>
        <h2>{designation}</h2>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </>
  );
}

export default App;
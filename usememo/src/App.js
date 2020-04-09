import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  const compute = () => {
    console.log(`Doing intensive work...`);
  };
  // const computed = compute();

  // useMemo will only recompute the memoized value when one of the deps has changed.
  // Returns a memoized value.
  // const computeMemo = React.useMemo(() => compute(), []);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <h2>{compute()}</h2>
      {/* <h2>{computed}</h2> */}
      {/* <h2>{computeMemo}</h2> */}
    </div>
  );
}

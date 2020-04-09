import React from "react";
import "./styles.css";

function Test({ data }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // After every render
    console.log(`Effect no deps`);
  });

  React.useEffect(() => {
    // cleanup before next render
    return () => console.log(`Clean up`);
  });

  React.useEffect(() => {
    // Mount
    console.log(`Effect empty deps`);
    // Unmount
    return () => console.log(`Unmount`);
  }, []);

  React.useEffect(() => {
    // First render
    // Next render only if count changed
    console.log(`Effect count dep`);
  }, [count]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </div>
  );
}

export default function App() {
  const [showTest, setShowTest] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowTest(!showTest)}>Toggle</button>
      {showTest && <Test />}
    </div>
  );
}

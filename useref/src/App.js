import React from "react";
import "./styles.css";

export default function App() {
  const header = React.useRef();

  const change = () => {
    header.current.innerHTML = "Bonjour";
  };
  return (
    <div className="App">
      <h1 ref={header}>Hello</h1>
      <button onClick={change}>French?</button>
    </div>
  );
}

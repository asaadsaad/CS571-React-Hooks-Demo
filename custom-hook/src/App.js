import React, { useState, useEffect } from "react";
import "./styles.css";
// A custom Hook is a function whose name starts with ”use”
// and that may call other Hooks.
// A custom Hook doesn’t need to have a specific signature.
// We can decide what it takes as arguments, and what it should return.
// In other words, it’s just like a normal function.
// Its name should always start with use
const useFetch = function(id) {
  const [state, setState] = useState({ data: null, loading: false });
  useEffect(() => {
    setState(prevState => ({ ...prevState, loading: true }));
    setTimeout(
      () =>
        setState(prevState => ({
          ...prevState,
          data: `Data ${id}`,
          loading: false
        })),
      3000
    );
  }, [id]);
  // passing deps is a must because we are calling setState() inside useEffect()
  return state;
};

export default function App() {
  const [id, setId] = useState(1);
  const { data, loading } = useFetch(id);

  return (
    <div className="App">
      <button onClick={() => setId(id + 1)}>{id}</button>
      <h1>{loading ? "loading..." : data}</h1>
    </div>
  );
}

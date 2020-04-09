import React from "react";
import "./styles.css";
const reducer = function(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_GRADE":
      return { ...state, grade: action.payload };
    default:
      return state;
  }
};
export default function App() {
  // use it when your state is complex, otherwise, use useState()
  const [{ name, grade }, dispatch] = React.useReducer(reducer, {
    name: "unknown",
    grade: 0
  });

  return (
    <div className="App">
      <h1>
        {name} - {grade}
      </h1>
      <button
        onClick={() => dispatch({ type: "SET_NAME", payload: "Asaad Saad" })}
      >
        Set Name
      </button>
      <button onClick={() => dispatch({ type: "SET_GRADE", payload: 100 })}>
        Set Grade
      </button>
    </div>
  );
}

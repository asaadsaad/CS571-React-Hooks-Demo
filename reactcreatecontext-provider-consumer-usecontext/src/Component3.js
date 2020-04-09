import React from "react";
import { CountContext } from "./CountContext";

// React.memo is a higher order component.
// It’s similar to React.PureComponent but for function components instead of classes.

/*
If a function component wrapped in React.memo 
has a useState or useContext Hook in its implementation, 
it will still rerender when state or context change.
*/
const Component3 = props => {
  const { count } = React.useContext(CountContext);
  console.log(`Component 3 render`);
  return <div>CountValue: {count}</div>;
};

// will be re-rendered when changing text
// export default Component3;
export default React.memo(Component3);

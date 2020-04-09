import React from "react";
import "./styles.css";
// try at: https://jscomplete.com/playground

// const state = () => {
//   console.log(`creating state`);
//   const now = new Date().getTime();
//   while (new Date().getTime() < now + 3000) {}
//   return 0;
// };

const longState = () => {
  console.log(`creating state`);
  // const now = new Date().getTime();
  // while (new Date().getTime() < now + 3000) {};
  return 0;
};

export default function App() {
  const [value, setValue] = React.useState(longState());
  console.log(`render`, value);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

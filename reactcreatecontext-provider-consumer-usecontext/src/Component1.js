import React from "react";
import { CountContext } from "./CountContext";

export default class Component1 extends React.PureComponent {
  render() {
    console.log(`Component 1 render`);
    return (
      <CountContext.Consumer>
        {({ increment }) => <button onClick={increment}>increment</button>}
      </CountContext.Consumer>
    );
  }
}

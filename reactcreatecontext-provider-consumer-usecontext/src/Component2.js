import React from "react";
import { CountContext } from "./CountContext";

export default class Component2 extends React.Component {
  render() {
    console.log(`Component 2 render`);
    return (
      <CountContext.Consumer>
        {({ count }) => <div>CountValue: {count}</div>}
      </CountContext.Consumer>
    );
  }
}

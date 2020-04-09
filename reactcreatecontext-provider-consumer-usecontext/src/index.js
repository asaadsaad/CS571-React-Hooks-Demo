import React from "react";
import { render } from "react-dom";
import { CountContext } from "./CountContext";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      contextState: {
        count: 0,
        increment: this.increment
      }
    };
  }

  increment = () => {
    this.setState({
      contextState: {
        ...this.state.contextState,
        count: this.state.contextState.count + 1
      }
    });
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <CountContext.Provider value={this.state.contextState}>
        <div>
          <h3>App Component</h3>
          <input name="text" value={this.state.text} onChange={this.onChange} />
          <div>Count: {this.state.contextState.count}</div>
          <hr />
          <Component1 />
          <Component2 />
          <Component3 />
        </div>
      </CountContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));

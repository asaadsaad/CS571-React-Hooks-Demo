import React, { Component } from "react";
import ReactDOM from "react-dom";

/**
 * Memoized component
 * Only updates when message changes
 */
const MessageComponent = props => {
  console.log(`rendering MSG`);
  return <div>{props.message}</div>;
};
// React.memo is a higher order component.
// It’s similar to React.PureComponent but for function components instead of classes.
// create a version that only renders on prop changes
// React.memo(Component) only checks for prop changes
const MemoizedMessageComponent = React.memo(MessageComponent);

// counter component
// we need a second moving component to trigger a render on our app
const Counter = props => <strong>{props.count}</strong>;

class App extends Component {
  state = { count: 0, value: "my message goes here" };

  handleChange = e => this.setState({ value: e.target.value });
  handleClick = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count, value } = this.state;

    return (
      <div className="hero is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React.memo(): <Counter count={count} />
            </h1>

            <button
              type="button"
              className="button is-warning"
              onClick={this.handleClick}
            >
              Increase Count
            </button>

            <input
              type="text"
              className="input"
              value={value}
              onChange={this.handleChange}
              style={{ marginTop: "30px", marginBottom: "30px" }}
            />

            <div className="columns is-mobile">
              <div className="column">
                <MessageComponent message={value} />
              </div>
              <div className="column">
                <MemoizedMessageComponent message={value} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

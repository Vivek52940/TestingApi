import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      hasErrors: false,
      planets: {}
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((res) => this.setState({ planets: res }))
      .catch(() => this.setState({ hasErrors: true }));
  }
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <h3>Result</h3>
        <div>{JSON.stringify(this.state.planets)}</div>
        <div>{this.state.planets.userId}</div>
        <div>{this.state.planets.title}</div>
        <div>{this.state.planets.title}</div>
        <div>{this.state.planets.id}</div>
      </>
    );
  }
}
ReactDOM.render(<Test />, document.getElementById("root"));

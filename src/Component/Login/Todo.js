import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      finalValue: [],
    };
  }
  handlechange = (e) => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };
  handlesubmit() {
    if (this.state.inputValue !== "") {
      const finalValue = [...this.state.finalValue];
      finalValue.push(this.state.inputValue);
      this.setState({
        finalValue,
        inputValue: "",
      });
    }
  }
  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.handlesubmit();
          }}
        >
          {" "}
          todo submit
        </button>
        <input
          type="text"
          name="name"
          placeholder="text"
          // ref={inputref}
          value={this.state.inputValue}
          onChange={(e) => {
            this.handlechange(e);
          }}
        ></input>
        <p>
          {this.state.finalValue.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </p>
      </div>
    );
  }
}

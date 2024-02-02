import React from "react";

interface IState {
  name: string;
  age: number;
}

export default class NameCounterClass extends React.Component<unknown, IState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <div>
        <input
          id="input"
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <div>
          <button
            onClick={() =>
              this.setState((currentState) => {
                return { ...currentState, age: currentState.age - 1 };
              })
            }
          >
            -
          </button>
          <span>{this.state.age}</span>
          <button
            onClick={() =>
              this.setState((currentState) => {
                return { ...currentState, age: currentState.age + 1 };
              })
            }
          >
            +
          </button>
        </div>
        <div>
          My name is {this.state.name} and I'm {this.state.age}
        </div>
      </div>
    );
  }
}

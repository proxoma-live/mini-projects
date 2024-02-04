import { Component } from "react";

interface IState {
  name: string;
  age: number;
  render: boolean;
}

interface IProps {}

export default class Lifecycle extends Component<IProps, IState> {
  logDebounceTimeoutId: number | undefined;
  logDebounce: () => void;

  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "",
      age: 0,
      render: false,
    };

    this.logDebounce = () => {
      this.logDebounceTimeoutId = setTimeout(() => {
        console.log("debounced name", this.state.name);
      }, 1000);
    };
  }

  componentDidMount(): void {
    console.log("Hi");
  }

  componentDidUpdate(prevState: Readonly<IState>): void {
    console.log("Render");

    if (
      this.state.name !== prevState.name ||
      this.state.age !== prevState.age
    ) {
      console.log(
        `My name is ${this.state.name} and my age is ${this.state.age}`
      );
    }

    if (this.state.name !== prevState.name) {
      document.title = this.state.name;
      clearTimeout(this.logDebounceTimeoutId);
      this.logDebounce();
    }
  }

  componentWillUnmount(): void {
    clearTimeout(this.logDebounceTimeoutId);
    console.log("Bye");
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <button onClick={() => this.setState({ render: !this.state.render })}>
          rerender
        </button>
        <button
          onClick={() =>
            this.setState((currentState) => ({
              ...currentState,
              age: this.state.age + 1,
            }))
          }
        >
          {this.state.age}
        </button>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <div>My name is {this.state.name}</div>
      </div>
    );
  }
}

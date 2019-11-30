import React, { Component } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };
  styles_button = {
    fontSize: 15
  };
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={this.styles_button}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          style={this.styles_button}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}
export default Counter;

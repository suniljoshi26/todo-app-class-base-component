import React, { Component } from "react";
import Checkbox from "./Checkbox";
type rowprops = {
  todo: String;
  done: boolean;
};
export default class TodoRow extends Component<rowprops> {
  render() {
    console.log(this.props.todo);
    return (
      <div className="flex space-x-2 items-center">
        <Checkbox checked={this.props.done} />
        <h3>{this.props.todo}</h3>
      </div>
    );
  }
}

import React, { Component } from "react";
import Checkbox from "./Checkbox";
type rowprops = {
  todo: String;
};
export default class TodoRow extends Component<rowprops> {
  render() {
    console.log(this.props.todo);
    return (
      <div className="flax space-x-2">
        {/* <Checkbox /> */}
        <h3>{this.props.todo}</h3>
      </div>
    );
  }
}

import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";
type rowprops = {
  todo: String;
  done: boolean;
  onStatusChange: Function;
};
export default class TodoRow extends Component<rowprops> {
  handleChange() {
    this.props.onStatusChange(this.props.todo);
  }
  render() {
    console.log(this.props.todo);
    this.handleChange = this.handleChange.bind(this);
    return (
      <div className="flex space-x-2 items-center">
        <Checkbox checked={this.props.done} onChange={this.handleChange} />
        <h3>{this.props.todo}</h3>
        <AiFillDelete />
      </div>
    );
  }
}

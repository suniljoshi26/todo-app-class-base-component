import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";
type rowprops = {
  todo: String;
  done: boolean;
  onStatusChange: Function;
  deleteTodo: Function;
};
export default class TodoRow extends Component<rowprops> {
  handleChange() {
    this.props.onStatusChange(this.props.todo);
  }
  onDelete() {
    this.props.deleteTodo(this.props.todo, this.props.done);
    console.log("delete", this.props.todo, this.props.done);
  }
  render() {
    console.log(this.props.todo);
    this.handleChange = this.handleChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    return (
      <div className="flex space-x-2 items-center">
        <Checkbox checked={this.props.done} onChange={this.handleChange} />
        <h3>{this.props.todo}</h3>
        <AiFillDelete onClick={this.onDelete} />
      </div>
    );
  }
}

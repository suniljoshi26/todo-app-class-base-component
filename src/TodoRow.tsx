import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";
import Card from "./Form/Card";
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
      <div className="flex justify-between items-center  p-2 border border-gray-400 shadow-md rounded-md mt-1  w-80">
        <div className="flex space-x-2 items-center ">
          {" "}
          <Checkbox checked={this.props.done} onChange={this.handleChange} />
          <h3 className="text-lg">{this.props.todo}</h3>
        </div>
        <div>
          <AiFillDelete onClick={this.onDelete} />
        </div>
      </div>
    );
  }
}

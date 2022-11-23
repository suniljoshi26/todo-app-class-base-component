import React, { Component } from "react";
import Button from "../Button";
import H3 from "../H3";
import Input from "./Input";

export default class Card extends Component {
  render() {
    return (
      <div className="p-4 rounded-md border border-gray-300 shadow-md">
        <H3> Create a todo</H3>
        <Input />
        <div className="flex space-x-6 mt-4">
          <Button>Save</Button>
          <Button them="secondary">Cancel </Button>
        </div>
      </div>
    );
  }
}

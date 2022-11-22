import React, { Component } from "react";
type buttonProps = {
  children: string;
};

export default class Button extends Component<buttonProps> {
  render() {
    return (
      <button className="px-4 py-2  bg-yellow-500  text-white disabled:bg-gray-400">
        {this.props.children}
      </button>
    );
  }
}

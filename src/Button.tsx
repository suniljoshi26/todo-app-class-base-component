import React, { ButtonHTMLAttributes, Component } from "react";
type buttonProps = {
  children: string;

  them?: "highlight" | "secondary" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default class Button extends Component<buttonProps> {
  render() {
    let themClass =
      "text-white rounded-md bg-yellow-500 border-transparent  hover:bg-yellow-600 ";

    let radiusClass = "";
    if (this.props.them === "highlight") {
      radiusClass = " mt-2 rounded-full";
    }
    if (this.props.them === "secondary") {
      themClass =
        "text-gray-900 bg-white  border-gray-300 hover:bg-gray-600 rounded-md";
    }
    return (
      <button
        className={
          "px-4 py-2   border  disabled:bg-gray-400  " +
          themClass +
          " " +
          radiusClass
        }
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
  defaultProps = {
    them: "primary",
  };
}

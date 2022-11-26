import React, { Component, InputHTMLAttributes } from "react";
type CheckboxP = InputHTMLAttributes<HTMLInputElement>;
export default class Checkbox extends Component<CheckboxP> {
  render() {
    return (
      <input
        className="w-4 h-4"
        type="checkbox"
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}

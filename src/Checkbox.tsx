import React, { Component, InputHTMLAttributes } from "react";
type CheckboxP = InputHTMLAttributes<HTMLInputElement>;
export default class Checkbox extends Component<CheckboxP> {
  render() {
    return (
      <input
        type="checkbox"
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}

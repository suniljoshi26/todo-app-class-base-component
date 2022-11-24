import React, { Component, InputHTMLAttributes } from "react";
type inputProps = InputHTMLAttributes<HTMLInputElement>;
export default class Input extends Component<inputProps> {
  render() {
    return (
      <div>
        <input
          placeholder="Write an article about XState"
          className="border border-gray-300 rounded-md mt-4 px-4 py-2 w-72"
          {...this.props}
        />
      </div>
    );
  }
}

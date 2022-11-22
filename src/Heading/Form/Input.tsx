import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Write an article about XState"
          className="border border-gray-300 rounded-md px-4 py-2 w-72"
        />
      </div>
    );
  }
}

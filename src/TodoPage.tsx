import React, { Component } from "react";
import H1 from "./Heading/H1";
import NavBar from "./NavBar";

export default class TodoPage extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <NavBar />
        <div className="px-32">
          <H1>Things to get done</H1>
        </div>
      </div>
    );
  }
}

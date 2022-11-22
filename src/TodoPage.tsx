import React, { Component } from "react";
import Button from "./Heading/Button";
import Input from "./Heading/Form/Input";
import H1 from "./Heading/H1";
import H3 from "./Heading/H3";
import NavBar from "./NavBar";

export default class TodoPage extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <NavBar />
        <div className="px-32">
          <H1>Things to get done</H1>
          <H3>Things to do</H3>
          <Button>Save</Button>
          <Input />
        </div>
      </div>
    );
  }
}

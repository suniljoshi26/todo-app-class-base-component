import React, { Component } from "react";
import Button from "./Heading/Button";
import Card from "./Form/Card";
import H1 from "./Heading/H1";
import H3 from "./Heading/H3";
import NavBar from "./NavBar";
type state = {
  formShow: boolean;
};
export default class TodoPage extends Component<state> {
  constructor(props: state) {
    super(props);
    this.state = {
      formShow: false,
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <NavBar />
        <div className="px-32">
          <H1>Things to get done</H1>
          <H3>Things to do</H3>
          {!this.props.formShow && <Button them="highlight">+ Add Todo</Button>}
          {this.props.formShow && <Card></Card>}
        </div>
      </div>
    );
  }
}

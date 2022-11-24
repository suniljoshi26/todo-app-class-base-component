import React, { Component } from "react";
import Button from "./Button";
import Card from "./Form/Card";
import H1 from "./Heading/H1";
import H3 from "./Heading/H3";
import NavBar from "./NavBar";
type todoprops = {
  n: string;
};
type state = {
  formShow: boolean;
};
export default class TodoPage extends Component<todoprops, state> {
  constructor(props: todoprops) {
    super(props);
    this.state = {
      formShow: false,
    };
  }

  showForm() {
    this.setState({ formShow: true });
    console.log("form");
  }

  render(): React.ReactNode {
    this.showForm = this.showForm.bind(this);
    return (
      <div>
        <NavBar />
        <div className="px-32">
          <H1>Things to get done</H1>
          <H3>Things to do</H3>
          {!this.state.formShow && (
            <Button them="highlight" onClick={this.showForm}>
              + Add Todo
            </Button>
          )}
          {this.state.formShow && <Card></Card>}
        </div>
      </div>
    );
  }
}

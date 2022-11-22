import React, { Component } from "react";
type H1Props = {
  children: String;
};
export default class H1 extends Component<H1Props> {
  render() {
    return (
      <div className=" mt-10 text-4xl font-semibold">{this.props.children}</div>
    );
  }
}

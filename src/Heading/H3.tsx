import React, { Component } from "react";
type H3props = {
  children: String;
  className?: string;
};

export default class H3 extends Component<H3props> {
  render() {
    return (
      <h3 className={"text-2xl  font-semibold " + this.props.className}>
        {this.props.children}
      </h3>
    );
  }
}

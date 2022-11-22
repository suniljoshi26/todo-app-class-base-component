import React, { Component } from "react";
type H3props = {
  children: String;
};

export default class H3 extends Component<H3props> {
  render() {
    return (
      <h3 className="text-2xl mt-10 font-semibold">{this.props.children}</h3>
    );
  }
}

import React, { ChangeEvent, Component } from "react";
import Button from "../Button";
import H3 from "../Heading/H3";
import Input from "./Input";
type cardprops = { onSave: Function };
type stateprops = {
  inputValue: string;
};
export default class Card extends Component<cardprops, stateprops> {
  constructor(props: cardprops) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  }
  save() {
    this.props.onSave(this.state.inputValue);
    console.log("save");
  }
  render() {
    this.save = this.save.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    return (
      <div className="p-4 rounded-md border border-gray-300 shadow-md">
        <H3> Create a todo</H3>
        <Input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />

        <div className="flex space-x-6 mt-4">
          <Button onClick={this.save}>Save</Button>
          <Button them="secondary">Cancel </Button>
        </div>
      </div>
    );
  }
}

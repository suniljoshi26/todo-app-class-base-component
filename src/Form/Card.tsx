import React, { ChangeEvent, Component } from "react";
import Button from "../Button";
import H3 from "../Heading/H3";
import Input from "./Input";
type cardprops = {
  onSave: Function;
  hideForm: Function;
};
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
    // this.props.hideForm();
    this.setState({ inputValue: "" });
  }
  hide() {
    this.props.hideForm();
  }
  render(): React.ReactNode {
    this.save = this.save.bind(this);
    this.hide = this.hide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    return (
      <div className="p-4 rounded-md border border-gray-300 shadow-md">
        <H3> Create a todo</H3>
        <Input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />

        <div className="flex space-x-6 mt-4">
          <Button
            onClick={this.save}
            disabled={this.state.inputValue.trim().length == 0}
          >
            Save
          </Button>
          <Button them="secondary" onClick={this.hide}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

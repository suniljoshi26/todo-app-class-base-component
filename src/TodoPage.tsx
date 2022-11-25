import React, { Component } from "react";
import Button from "./Button";
import Card from "./Form/Card";
import H1 from "./Heading/H1";
import H3 from "./Heading/H3";
import NavBar from "./NavBar";
import TodoRow from "./TodoRow";
type todoprops = {
  todo?: string;
};
type state = {
  formShow: boolean;
  todoList: String[];
};
export default class TodoPage extends Component<todoprops, state> {
  constructor(props: todoprops) {
    super(props);
    this.state = {
      formShow: false,
      todoList: ["done", "not done"],
    };
  }
  addTodo(todo: string) {
    const t = [...this.state.todoList, todo];

    this.setState({ todoList: t });
    console.log("yty");
  }
  showForm() {
    this.setState({ formShow: true });
    console.log("form");
  }

  render(): React.ReactNode {
    this.showForm = this.showForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
    return (
      <div>
        <NavBar />
        <div className="px-32">
          <H1>Things to get done</H1>
          <H3>Things to do</H3>
          {this.state.todoList.map((todo, index) => (
            <TodoRow todo={todo} key={index} done={true} />
          ))}
          {!this.state.formShow && (
            <Button them="highlight" onClick={this.showForm}>
              + Add Todo
            </Button>
          )}
          {this.state.formShow && <Card onSave={this.addTodo}></Card>}
        </div>
      </div>
    );
  }
}

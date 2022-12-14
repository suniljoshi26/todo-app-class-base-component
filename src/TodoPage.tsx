import React, { Component } from "react";
import Button from "./Button";
import Card from "./Form/Card";
import H1 from "./Heading/H1";
import H3 from "./Heading/H3";
import Msg from "./Msg";
import NavBar from "./NavBar";
import TodoRow from "./TodoRow";
type todoprops = {
  todo?: string;
};
type state = {
  formShow: boolean;
  todoList: String[];
  doneList: String[];
};
export default class TodoPage extends Component<todoprops, state> {
  constructor(props: todoprops) {
    super(props);
    this.state = {
      formShow: false,
      todoList: ["done", "not done"],
      doneList: ["work", "complete"],
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
  hideForm() {
    this.setState({
      formShow: false,
    });
  }
  markAsNotDone(todo: String) {
    const t = this.state.doneList.filter((t) => t !== todo);
    this.setState({ doneList: t });
    this.setState({ todoList: [...this.state.todoList, todo] });
    console.log("mark  not as done");
  }
  markAsDone(todo: String) {
    const t = this.state.todoList.filter((t) => t !== todo);
    this.setState({ todoList: t });
    this.setState({ doneList: [...this.state.doneList, todo] });
    console.log("mark  not as done");
  }
  deleteTodo(todo: String, done: boolean) {
    console.log("delete", todo);
    const newTodoList = this.state.todoList.filter((t) => t !== todo);
    const newDoneList = this.state.doneList.filter((t) => t !== todo);

    this.setState({ doneList: [...newDoneList] });
    this.setState({ todoList: [...newTodoList] });
  }
  render(): React.ReactNode {
    this.showForm = this.showForm.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.markAsNotDone = this.markAsNotDone.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.hideForm = this.hideForm.bind(this);
    return (
      <div>
        <NavBar />
        <div className=" px-12 sm:px-32">
          <H1>Things to get done</H1>
          <H3 className="mt-8">Things to do</H3>
          {(this, this.state.todoList.length === 0 && <Msg />)}
          {this.state.todoList.map((todo, index) => (
            <TodoRow
              todo={todo}
              key={index}
              done={false}
              onStatusChange={this.markAsDone}
              deleteTodo={this.deleteTodo}
            />
          ))}
          {!this.state.formShow && (
            <Button them="highlight" onClick={this.showForm}>
              + Add Todo
            </Button>
          )}
          {this.state.formShow && (
            <Card onSave={this.addTodo} hideForm={this.hideForm}></Card>
          )}
          <H3>Things to done</H3>
          {(this, this.state.doneList.length === 0 && <Msg />)}
          {this.state.doneList.map((todo, index) => (
            <TodoRow
              todo={todo}
              key={index}
              done={true}
              onStatusChange={this.markAsNotDone}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

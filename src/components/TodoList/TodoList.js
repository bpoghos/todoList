import TodoListItem from "./TodoListItem";
import "./todo-list.css";
import { Component } from "react";


export default class TodoList extends Component {

  render() {
    const { items } = this.props

    const data = items.map(({ text, important, id }) => {
      return (<TodoListItem text={text} important={important} key={id} />);
    });

    return (
      <ul className="todolist">{data}</ul>
    );
  }
}



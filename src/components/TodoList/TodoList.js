import TodoListItem from "./TodoListItem";
import "./todo-list.css";
import { Component } from "react";


export default class TodoList extends Component {

  
  render() {
    const { items, deleteItem, onImportant, onDone } = this.props

    const data = items.map(({ text, id, isImportant, isDone, isError}) => {
      return (<TodoListItem 
        text={text} 
        isImportant={isImportant} 
        key={id} 
        deleteItem={deleteItem} 
        id={id} 
        items={items} 
        onDone={onDone}
        isDone={isDone}
        onImportant={onImportant}
        isError={isError}
        />);
    });

    return (
      <ul className="todolist">{data}</ul>
    );
  }
}



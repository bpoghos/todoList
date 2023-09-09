import TodoListItem from "./TodoListItem";
import "./todo-list.css";
import { Component } from "react";


export default class TodoList extends Component {

  
  render() {
    const { items, deleteItem, onEdit, onImportant, onDone } = this.props

    const data = items.map(({ text, id, isEdit, isImportant, isDone, isError}) => {
      return (<TodoListItem 
        text={text} 
        isImportant={isImportant} 
        key={id} 
        deleteItem={deleteItem} 
        id={id} 
        items={items} 
        isEdit={isEdit}
        onEdit={onEdit}
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



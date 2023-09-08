import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component {
  state = {
    items: [
      { text: "Learn JS", isImportant: true, id: 1, isEdit: false, isDone: false },
      { text: "Drink Coffee", isImportant: false, id: 2, isEdit: false, isDone: false },
      { text: "Learn React", isImportant: false, id: 3, isEdit: false, isDone: false },
      { text: "Learn TypeScript", isImportant: true, id: 4, isEdit: false, isDone: false },
      { text: "Learn Node.js", isImportant: false, id: 5, isEdit: false, isDone: false },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id)

      return {
        items: [
          ...items.slice(0, idx),
          ...items.slice(idx + 1)
        ]
      }
    })
  }

  onEdit = (id, newText) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return { ...item, isEdit: !item.isEdit, text: newText };
        }
        return item;
      });
      return { items: updatedItems };
    });
  }


  onImportant = (id) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return { ...item, isImportant: !item.isImportant };
        }
        return item;
      });
      

      return { items: updatedItems };
    });
  }


  onDone = (id) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
      return { items: updatedItems };
    })
  }

  onAddItem = (text) => {
    const id = this.state.items.length ? this.state.items[this.state.items.length - 1].id + 1 : 1
    const newItem = {
      text,
      isImportant: false,
      id
    }
    this.setState((prevState) => {
      return {
        items: [...prevState.items, newItem]
      }
    })
  }


  render() {
    const { items } = this.state

    return (
      <div className="app">
        <Header done={8} isImportant={23} />
        <Search />
        <TodoList items={items} deleteItem={this.deleteItem} onEdit={this.onEdit} onImportant={this.onImportant} onDone={this.onDone}/>
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

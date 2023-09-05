import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

class App extends Component{
  state = {
    items: [
      { text: "Learn JS", important: true, id: 1 },
      { text: "Drink Coffee", important: false, id: 2 },
      { text: "Learn React", important: false, id: 3 },
      { text: "Learn TypeScript", important: true, id: 4 },
      { text: "Learn Node.js", important: false, id: 5 },
    ]
  }


  onAddItem = (text) => {
    const newItem = {
      text,
      important: false,
      id: this.state.items[this.state.items.length - 1].id + 1
    }

    this.setState((prevState) => {
      return{
        items: [...prevState.items, newItem]
      }
    })
  }

  onRemove = (itemId) => {
      this.setState((prevState) => ({
        items: prevState.items.filter(item => item.id !== itemId)
      }))
  }



  render(){
    const {items} = this.state



    return (
      <div className="app">
        <Header done={8} important={23}/>
        <Search />
        <TodoList items={items} onRemove={this.onRemove}/>
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

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
      { text: "Learn JS", isImportant: true, id: 1, isDone: false },
      { text: "Drink Coffee", isImportant: false, id: 2, isDone: true },
      { text: "Learn React", isImportant: false, id: 3, isDone: false },
      { text: "Learn TypeScript", isImportant: true, id: 4, isDone: false },
      { text: "Learn Node.js", isImportant: false, id: 5, isDone: true },
    ],
    term: ''
    
  }

  onSearch =(term) => {
    this.setState({ term })
  }
  


  handelSearch = (items, term) => {
    if(term.trim().length === 0){
      return items
    }
    
    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  };


  handelFilter = () => {
    
  }

  handleAll = (filteredItems) => {
    this.setState(({items}) => {
      return{
        items: filteredItems
      }
    })
  };


  handleAllDone = (filterDone) => {
    this.setState(({items}) => {
      return {
        items: filterDone
      }
    })
  }

  handleAllImportant = (filterImportant) => {
    this.setState(({items}) => {
      return {
        items: filterImportant
      }
    })
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
    const { items, term } = this.state
    const visibleItems = this.handelSearch(items, term)

    const doneCount = this.state.items.filter((item) => item.isDone).length
    const importantCount = this.state.items.filter((item) => item.isImportant).length




    return (
      <div className="app">
        <Header done={doneCount} isImportant={importantCount} />
        <Search items={items} onSearch={this.onSearch} handelSearch={this.handelSearch} handleAll={this.handleAll} handleAllDone={this.handleAllDone} handleAllImportant={this.handleAllImportant}/>
        <TodoList  items={visibleItems} deleteItem={this.deleteItem} onEdit={this.onEdit} onImportant={this.onImportant} onDone={this.onDone} />
        <AddItem onAddItem={this.onAddItem} />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

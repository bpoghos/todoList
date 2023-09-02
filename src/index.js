import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
import "./index.css";

const App = () => {
  const items = [
    { text: "Learn JS", important: true, id: 1 },
    { text: "Drink Coffee", important: false, id: 2 },
    { text: "Learn React", important: false, id: 3 },
    { text: "Learn TypeScript", important: true, id: 4 },
    { text: "Learn Node.js", important: false, id: 5 },
  ];
  return (
    <div className="app">
      <Header />
      <Search />
      <TodoList items={items} />
      <AddItem />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

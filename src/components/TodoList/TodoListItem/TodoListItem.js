import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck } from 'react-icons/fa6'
import { Component } from 'react';

export default class TodoListItem extends Component{

  state = {
    isDone: false,
    isImportant: false

  }

  onDone = () => {
    this.setState({
      isDone: !this.state.isDone
    })
  }
  onImportant = () => {
    this.setState({
      isImportant: !this.state.isImportant
    })
  }

  render(){
const {text, important} = this.props
const {isDone} = this.state
const {isImportant} = this.state


    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? "#d72020" : "black"),
      fontWeight: isDone ? 'normal' : (isImportant ? "bold" : 'normal'),
    }
    
  
    return (
      <li className='list-item' >
        <span className='item-text' style={textStyle} onClick={this.onDone}>
          {text}</span>
  
        <span className='item-btns'>
          <button className='item-btn-done' onClick={this.onDone}><FaCheck/></button>
          <button className='item-btn-important' onClick={this.onImportant}><FaInfo/></button>
          <button className='item-btn-remove'><FaTrash/></button>
        </span>
      </li>
    );
  }
}




  

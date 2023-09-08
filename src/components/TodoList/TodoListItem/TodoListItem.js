import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare } from 'react-icons/fa6'
import { Component } from 'react';

export default class TodoListItem extends Component {

  state = {
    title: this.props.text
  }

  onDelete = () => {
    this.props.deleteItem(this.props.id)
  }

  onHandleChange = (value) => {
    this.setState({
      title: value
    })
  }

  render() {
    const { text, onEdit, isEdit, onImportant, isImportant, onDone, isDone} = this.props



    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? "#d72020" : "black"),
      fontWeight: isDone ? 'normal' : (isImportant ? "bold" : 'normal'),
    }


    return (
      <li className='list-item' >
       {!isEdit ? <span className='item-text' style={textStyle} onClick={this.onDone}>
          {text}</span> : <input className='input-text'  value={this.state.title} onChange={(e) => this.onHandleChange(e.target.value)}/>}

        <span className='item-btns'>
          <button className='item-btn-edit'onClick={() => onEdit(this.props.id, this.state.title)}><FaPenToSquare /></button>
          <button className='item-btn-done' onClick={() => onDone(this.props.id)}><FaCheck /></button>
          <button className='item-btn-isImportant' onClick={() => onImportant(this.props.id)}><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}






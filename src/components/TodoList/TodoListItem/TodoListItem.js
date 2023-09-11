import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare, FaCircleCheck } from 'react-icons/fa6'
import { Component } from 'react';
import { validateInput } from '../../../utils/validator'

export default class TodoListItem extends Component {

  state = {
    text: this.props.text,
    isEdit: false,
    isError: false
  }

  onDelete = () => {
    this.props.deleteItem(this.props.id)
  }


  onEdit = () => {
    this.setState(({isEdit, text}) => {
      if(isEdit && !validateInput(text)) {
        return {
          isError: true
        }
      }
      return {
        isEdit: !isEdit,
        isError: false
      }
    })
  }


  onHandleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {
    const { onImportant, isImportant, onDone, isDone } = this.props
    const { isEdit, text, isError } = this.state



    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? '#aaa' : (isImportant ? "#d72020" : "black"),
      fontWeight: isDone ? 'normal' : (isImportant ? "bold" : 'normal'),
    }

    const inputStyle = {
      borderColor: isError ? 'red' : '#ccc'
    }


    return (
      <li className='list-item' >
        {
        isEdit ? (
          <div className='item-input-wrapper'>
            <input
            className='list-item-edit-input'
            style={inputStyle}
            value={text}
            onChange={this.onHandleChange} />
            {
              isError ? <span className='input-error-message'>Min length is greate 2</span> : null
  }
          </div>
          ) : (
          <span
          className='item-text'
          style={textStyle}
          onClick={() => onDone(this.props.id)}>
          {text} </span>

        )}






        <span className='item-btns'>
          <button className='item-btn-edit' onClick={() => this.onEdit(isEdit)}>
            {isEdit ? <FaCircleCheck /> : <FaPenToSquare />}
          </button>
          <button className='item-btn-done' onClick={() => onDone(this.props.id)}><FaCheck /></button>
          <button className='item-btn-isImportant' onClick={() => onImportant(this.props.id)}><FaInfo /></button>
          <button className='item-btn-remove' onClick={this.onDelete}><FaTrash /></button>
        </span>
      </li>
    );
  }
}






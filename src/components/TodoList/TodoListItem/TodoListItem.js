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

  // onEdit = (id, newText) => {
  //   this.setState(({items}) => {
  //     const updatedItems = items.map((item) => {
  //       if (item.id === id) {
  //         if(!this.state.isEdit && validateInput(newText)){
  //           return { ...item, isEdit: !item.isEdit, text: newText };
  //         }else {
  //           return { ...item, isError: true };
  //         }
  //       }
  //       return item;
  //     });
  //     return { items: updatedItems };
  //   });
  // }

  onEdit = (isEdit) => {
    this.setState({ isEdit: !isEdit })
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


    return (
      <li className='list-item' >
        {!isEdit ? (

          <span
            className='item-text'
            style={textStyle}
            onClick={() => onDone(this.props.id)}>
            {text} </span>) : (
          <input
            className='input-text'
            value={text}
            onChange={this.onHandleChange} />

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






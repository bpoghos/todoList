import './add-item.css'
import { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { validateInput } from '../../utils/validator';




export default class AddItem extends Component {

  state = {
    inputValue: '',
    isInputError: false
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = () => {
    if (!validateInput(this.state.inputValue)) {
      this.setState({ isInputError: true })
      return
    }
    this.props.onAddItem(this.state.inputValue);
    this.setState({ inputValue: '', isInputError: false })
  }





  render() {
    const { isInputError } = this.state

    return (
      <div className='additem'>
        {
          isInputError ? <ErrorMessage message='Error input length' type='error' /> : null
        }

        <input type="text" value={this.state.inputValue} placeholder="Item text..." onChange={this.onInputChange} />
        <button onClick={this.onBtnClick}>Add item</button>
      </div>
    )
  }
}


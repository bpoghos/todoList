import './add-item.css'
import { Component } from 'react';


export default class AddItem extends Component {
  render(){
  return (
    <div className='additem'>
      <input type="text" placeholder="Item text..." />
      <button>Add item</button>
    </div>
  )
}
}


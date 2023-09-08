import './header.css';
import { Component } from 'react'


export default class Header extends Component {

  render() {
    const { done, isImportant } = this.props

    return (
      <div className='header'>
        <h1>My Todo List
          <span className='header-info'>
          <span className='header-done'>Done: {done}</span>
          <span className='header-done'>isImportant: {isImportant}</span>
        </span></h1>
        
      </div>
    );
  }
}




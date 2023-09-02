import './header.css';
import { Component } from 'react'


class Header extends Component {

  render() {
    const { done, important } = this.props

    return (
      <div className='header'>
        <h1>My Todo List</h1>
        <span>
          <p>Done: {done}</p>
          <p>Important: {important}</p>
        </span>
      </div>
    );
  }
}



export default Header;
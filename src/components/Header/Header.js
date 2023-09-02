import './header.css';
import {Component} from 'react'


class Header extends Component{

  render(){
    return (
          <div className='header'>
            <h1>My Todo List</h1>
            <span>
              <p>Done: 12</p>
              <p>Important: 34</p>
            </span>
          </div>
        );
  }
}



export default Header;
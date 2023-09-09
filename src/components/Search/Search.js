import { Component } from 'react';
import './search.css';


export default class Search extends Component {
state = {
  title: ''
}

handleSearchInput = (e) => {
  this.setState({
    title: e.target.value
  })
}

  render(){
    const { handelSearch } = this.props


    return (
      <div className='search'>
        <input type="text" value={this.state.title} placeholder="Type text for search..." onChange={(e) => {
          this.handleSearchInput(e.target.value)
          handelSearch(this.state.title)
        }}/>
        <button className='search-btn-all'>All</button>
        <button className='search-btn-done'>Done</button>
        <button className='search-btn-isImportant'>isImportant</button>
      </div>
    );
  }
}


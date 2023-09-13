import { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './search.css';


export default class Search extends Component {
  state = {
    query: '',
    isAllDone: false,
    isAllImportant: false,
    isError: false,
    isAll: false,
    term: ''
  }

  onAll = () => {
    this.setState(({ isAll }) => {
      return {
        isAll: !isAll,
      }
    })
    const { items, handleAll } = this.props
    const filtered = items.filter(user => user)
    console.log(filtered);
    handleAll(filtered)
  }

  onAllImportant = () => {
    this.setState(({ isAllImportant }) => {
      return {
        isAllImportant: !isAllImportant
      }
    })
    const { items, handleAllImportant } = this.props
    const filtered = items.filter(user => user.isImportant)
    handleAllImportant(filtered)
  }

  onSearchChange = (e) => {
    this.setState({
      term: e.target.value
    })

    this.props.onSearch(e.target.value)
  }


  onAllDone = () => {
    this.setState(({ isAllDone }) => {
      return {
        isAllDone: !isAllDone
      }
    })
    const { items, handleAllDone } = this.props
    const filtered = items.filter(user => user.isDone)
    handleAllDone(filtered)
  }

  // onQuery = (e) => {
  //   this.setState({ query: e.target.value })

  //   const { items, handelSearch } = this.props
  //   const filtered = items.filter(item => item.text.toLowerCase().includes(this.state.query))
  //   if (!filtered.length) {
  //     this.setState({ isError: true })
  //     return
  //   }
  //   handelSearch(filtered)
  //   this.setState({ isError: false })

  // }


  render() {
    const { isError } = this.state

    return (
      <div className='search'>
        {
          isError ?
            <ErrorMessage
              message='no items'
              type='info' />
            : null
        }
        <input
          type="text"
          value={this.state.term}
          placeholder="Type text for search..."
          onChange={this.onSearchChange} />

        <button className='search-btn-all' onClick={this.onAll}>All</button>
        <button className='search-btn-done' onClick={this.onAllDone}>Done</button>
        <button className='search-btn-isImportant'onClick={this.onAllImportant}>isImportant</button>
      </div>
    );
  }
}


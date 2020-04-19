import React from 'react'

class SearchBar extends React.Component {
  state = {term: 'enter'}

  onInputChange = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return(
      <div className="ui segment"> 
        <form className="ui form" onSubmit={e => {this.onInputChange(e)}}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term}  onChange= {event => this.setState({term: event.target.value})}/>
            <button>submit</button>
          </div>
        </form>
      </div> 
    )
  }
}

export default SearchBar
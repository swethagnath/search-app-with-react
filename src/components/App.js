import React from 'react'
import Search from './SearchBar'
import Unsplash from '../api/unsplash'
import ImageList from './ImageList'


class App extends React.Component {

  state = {image: []}

  async onSubmit(value) {

    const response = await Unsplash
      .get('search/photos', {
        params: {
          query: value
        }
      })
    
    this.setState({ image: response.data.results })

  }

  render() {
    
    return(
      <div className="ui container" style= {{marginTop:'10px'}}>
        <Search onSubmit = {this.onSubmit.bind(this)} />
        <ImageList images={this.state.image}/>
        <p>found images: {this.state.image.length}</p>
      </div>
    )
    
  }

}

export default App
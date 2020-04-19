import React from 'react'
import './ImageLists.css'
import ImageCard from './ImageCard'

const Image = props => {
  
  const  images = props.images.map(image => {
    return <ImageCard key={image.id} image={image}/>
  })
 
  return <div class="image-list">{images}</div>
}

export default Image
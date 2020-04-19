import React from 'react'


class ImageCard extends React.Component{
  constructor(props) {
    
    super(props)
    this.imageRef = React.createRef();
    this.state = {
      span: 0
    }
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const span = Math.ceil(this.imageRef.current.clientHeight/10) //grid-auto-rows
    this.setState({ span })
  }

  render() {
    const {description, urls} = this.props.image
    return(
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img 
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }

}
  
export default ImageCard
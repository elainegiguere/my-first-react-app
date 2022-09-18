import React from 'react'
import featuredImage from '../images/image-equilibrium.jpg'

const ImageComponent = () => {
  return (
    <img className='featuredImage' src={featuredImage} alt='featureImage'></img>
  )
}

export default ImageComponent
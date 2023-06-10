import React from 'react'
import Image from '../images/image.png'

function ImageSection() {
  return (
    <>
    
    <div class="image-section">
            <img src={Image} alt=""/>
            <button class="try-btn">Try for free </button>
        </div>
    </>
  )
}

export default ImageSection
import React from 'react'

const Memorie = () => {
  return (
    <div className='memorie'>
        <div className='memorie_text'>
            <p>Hola amor, feliz segundo san Valentin juntos</p>
        </div>
        <div className='image_container'>
            <div className='image' style={{backgroundImage:`url(${require("../../images/us.jpg")})`}}></div>
        </div>
      </div>
  )
}

export default Memorie

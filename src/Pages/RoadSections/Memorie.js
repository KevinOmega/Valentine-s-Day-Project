import React, { useRef } from 'react'

const Memorie = ({text,img,type}) => {
    const container_ref= useRef();

    const scrollEffect = () => {
        console.log(container_ref.current.getBoundingClientRect().x)
    }

  return (
    <div className={`memorie ${type===1 && "type2"} `} onScrollCapture={scrollEffect}>
        <div className='memorie_text'>
            <p>{text}</p>
        </div>
        <div className='image_container'>
            <div className='image' style={{backgroundImage:`url(${img})`}}></div>
        </div>
      </div>
  )
}

export default Memorie

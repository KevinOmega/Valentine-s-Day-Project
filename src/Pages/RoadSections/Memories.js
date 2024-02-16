import React from 'react'
import Memorie from './Memorie'
import { memorie_items } from '../../api'

const Memories = () => {

  return (
    <section className='memories_section'>
      {memorie_items.map((item,index) => <Memorie key={item.id} text={item.text} img={item.img} type={index%2}/>)}
    </section>
  )
}

export default Memories

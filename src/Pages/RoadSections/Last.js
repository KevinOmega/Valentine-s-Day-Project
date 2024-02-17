import React from 'react'
import { background3, final_items } from '../../api'

const Last = () => {
  return (
    <section className='final_section'>
        <div className='background img_background' style={{backgroundImage: `url(${background3})`}}></div>
        {/* <div className='final_text'>
            <h4>Espero que te haya gustado</h4>
            <h4>Lo hice con mucho amor para ti</h4>
        </div> */}
        <div className='container'>
        <div className='row justify-content-center'>
        {final_items.map((item,index) => {
            return(
                <div className='col col-6 image_container' key={item.id}>
                    <div className='final_image'
                        style={{backgroundImage: `url(${item.img})`, animationDelay: `${(Math.random()*3)+2}s`, animationDuration:`${(Math.random() *4) +6}s`}}
                    ></div>
                </div>
            );
        }
            
        )}
      </div>
        </div>
      
    </section>
  )
}

export default Last

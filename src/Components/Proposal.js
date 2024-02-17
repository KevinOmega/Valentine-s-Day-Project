import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHeartCrack } from "react-icons/fa6";
import { messages } from '../api';


const Proposal = () => {
    const [noBtnX,setNoBtnX] = useState(0)
    const [noBtnY,setNoBtnY] = useState(0)
    const [isSelected,setIsSelected] = useState(false);
    const [date,setDate] = useState('');
    const [showAlert,setShowAlert] = useState(false);
    const navigate = useNavigate();
    const [wrapperX,setWrapperX] = useState(100);
    const [wrapperItemsWidth,setWrapperItemsWidth] = useState(0);

    const wrapperRef = useRef();

    const moveButton =()=> {
        setNoBtnX((Math.random()*15)-10)
        setNoBtnY((Math.random()*15)-2)
    }

    const onSubmit = () => {
      const secretDate = "02-01-2023"
      if(date !== secretDate){
        setShowAlert(true);
        return;
      }
      navigate("/secret")

    }

    useEffect(() => {
      const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
      const itemsWidth = wrapperWidth / (messages.length + 1)
      setWrapperItemsWidth(itemsWidth)
      setWrapperX(-(wrapperWidth/2) + (itemsWidth/2))
    },[])

  return (
    <section id='proposal_section'>
      <div className='wrapper' ref={wrapperRef} style={{transform: `translateX(${wrapperX}px)`}}>
        <div className='wrapper_section'>
          <div className='proposal'>
            <div className='cuestion'>
                <h3>Quieres ser mi Valentine?</h3>
            </div>
            <div className='answer_buttons'>
                <button className='btn btn-success' onPointerDown={() => setIsSelected(true)}>Si</button>
                <button className='btn btn-danger' 
                onPointerDown={moveButton}
                style={{transform:`translate(${noBtnX}rem,${noBtnY}rem)`}}>
                    No
                </button>
            </div>
          </div>
        </div>
        
        {
          messages.map(item => {
            return(
              <div key={item.id} className='wrapper_section' >
                <div className='proposal_card'
                onClick={() => setWrapperX(wrapperX + wrapperItemsWidth)} 
                >
                  <div className='card_content'>
                    <div className='card_text'>
                      <p>{item.message}</p>
                      <p className='span'>Toca para seguir</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })
        }
        
      </div>
      <div className={`proposal_card type2 ${isSelected && "active"}`}>
        <div className='card_content'>
            <p>Cual es nuestra fecha de aniversario?</p>
            <input 
            className='form-control' 
            placeholder='dd-mm-yyyy'
            onChange={(e) => setDate(e.target.value) }/>
            <button className='btn btn-dark' onClick={onSubmit}>Enviar</button>
            {showAlert &&
              <p className='text-danger fs-6'>
              Esa no es nuestra fecha de aniversario <span><FaHeartCrack/></span>
              </p>
            }
            
        </div>
      </div>
      
    </section>
  )
}

export default Proposal

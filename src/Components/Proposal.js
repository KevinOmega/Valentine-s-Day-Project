import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHeartCrack } from "react-icons/fa6";


const Proposal = () => {
    const [noBtnX,setNoBtnX] = useState(0)
    const [noBtnY,setNoBtnY] = useState(0)
    const [isSelected,setIsSelected] = useState(false);
    const [date,setDate] = useState('');
    const [showAlert,setShowAlert] = useState(false);
    const navigate = useNavigate();

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

  return (
    <section id='proposal_section' >
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
      <div className={`proposal_card ${isSelected && "active"}`}>
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

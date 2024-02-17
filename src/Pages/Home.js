import React from 'react'
import CardSection from '../Components/CardSection'
import Proposal from '../Components/Proposal'
import { background1 } from '../api'

const Home = () => {
  return (
    <div id='home_page'>
      <div className='home_background img_background' style={{backgroundImage : `url(${background1})`}}></div>
      <CardSection/>
      <Proposal/>
    </div>
  )
}

export default Home

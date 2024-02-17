import React from 'react'
import CardSection from '../Components/CardSection'
import Proposal from '../Components/Proposal'
import { background2 } from '../api'

const Home = () => {
  return (
    <div id='home_page'>
      <div className='background img_background' style={{backgroundImage : `url(${background2})`}}></div>
      <CardSection/>
      <Proposal/>
    </div>
  )
}

export default Home

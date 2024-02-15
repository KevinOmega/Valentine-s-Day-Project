import React from 'react'
import { home_image } from '../api'
import CardSection from '../Components/CardSection'
import Proposal from '../Components/Proposal'

const Home = () => {
  return (
    <div id='home_page'>
      <CardSection/>
      <Proposal/>
    </div>
  )
}

export default Home

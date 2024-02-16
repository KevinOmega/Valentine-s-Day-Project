import React, {  useState } from 'react'
import sound from "../Audio/closeToYou.mp3"
import Introduccion from './RoadSections/Introduccion';
import Memories from './RoadSections/Memories';

const Road = () => {
  const [isPlaying,setIsPlaying] = useState(false)

  const playMusic = () =>{
    const audio = new Audio(sound);
    console.log(isPlaying)
    if (!isPlaying) {
      setIsPlaying(true);
      // audioRef.current.muted = true;
      audio.play();
    }
  }

  
  return ( 
    <div id='road_page' onClick={playMusic} style={{backgroundImage: `url(${require("../images/home.jpg")})`}}>
      <Introduccion/>
      <Memories/>
    </div>
  )
}

export default Road

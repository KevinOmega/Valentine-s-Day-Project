import React, {  useState } from 'react'
import sound from "../Audio/closeToYou.mp3"
import Introduccion from './RoadSections/Introduccion';
import Memories from './RoadSections/Memories';
import Last from './RoadSections/Last';
import { background1} from '../api';

const Road = () => {
  const [isPlaying,setIsPlaying] = useState(false)

  const playMusic = () =>{
    const audio = new Audio(sound);
    console.log(isPlaying)
    if (!isPlaying) {
      setIsPlaying(true);
      // audioRef.current.muted = true;
      audio.play();
      audio.loop = true;
    }
  }

  
  return ( 
    <div id='road_page' onClick={playMusic} >
      <div className='background img_background' style={{backgroundImage : `url(${background1})`}}></div>
      <Introduccion isPlaying={isPlaying}/>
      <Memories/>
      <Last/>
    </div>    
  )
}

export default Road

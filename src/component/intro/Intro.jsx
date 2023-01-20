import React, { useEffect , useRef, useState} from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
// const [rext,setText]=useState("Freelance")
 
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="Wrapper">
          <h2> Hi There, i'm </h2>
          <h1> Craniofacial Surgery </h1>
          <h3 >Freelance{'  '}
        <span >
          <Typewriter
            words={["Developer", "Designer", "Content Creater"]}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro

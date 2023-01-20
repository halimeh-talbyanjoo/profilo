import React, { useState } from 'react'
import './contact.scss'

const Contact = () => {
  const [message,setMessage]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage(true)
    console.log("ali")

  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="./assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contant.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Tanks,I,ll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact

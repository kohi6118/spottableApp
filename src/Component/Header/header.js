import React from 'react'
import "./header.css";
const header = () => {
  return (
    <div className='header'>
        <div className='logo'>
         <img src="http://localhost:3000/logo.png"className='logo_image'/>
        </div>
        <div className='title'>
            <h1 className='title-heading'>YOUR SPOTTABLE TEAM</h1>
            <p className='title-description'>Spottable support You throughout</p>
        </div>

    </div>
  )
}

export default header;
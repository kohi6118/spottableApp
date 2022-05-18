import React from 'react'
import "./card.css";
const Card = (props) => {
    const data=props.data;
  return (
    data && <div className='card'>
        <div className='card-profile'>
           {data.name.slice(0,2).toUpperCase()}
        </div>
        <div className='card-content'>
            <div>
            <h3 className='card-heading'>
               { data.name }
            </h3>
            <p className='card-description'>
                <label className='card-designation'>{data.designation}</label>
                <label className='card-email'> {data.email}</label>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Card
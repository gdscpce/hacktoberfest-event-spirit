import React from 'react'
import './Card.css'

const Card = ({eventName,eventDate,organizer}) => {
  return (
    <div className='card'>
        <h1 className='card__title'>{eventName}</h1>
        <p className='card__date'>{eventDate}</p>
        <p className='card__org'>By- <span style={{ color: "#5e5e6b" }}>{organizer}</span></p>
        <button className='card__button'> Register</button>
    </div>
  )
}

export default Card
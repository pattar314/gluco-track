import React from 'react'
import './Entry.css'

const Entry = (props) => {

  return (
    <div className='entry-wrapper'>
      <span className='entry-date'>{props.date}</span>
      <span className='entry-value'>{props.value}</span>
    </div>
  )
}

export default Entry

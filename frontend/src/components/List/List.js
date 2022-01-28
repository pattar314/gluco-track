import React from 'react'
import Entry from '../Entry/Entry'
import './List.css'

const List = (props) => {
  return (
    <div className='list-wrapper'>
      {props.list.map(item => {
        <Entry data={item.data} value={item.value} />
      })}
    </div>
  )
}

export default List

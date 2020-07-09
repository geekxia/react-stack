import React from 'react'
import './style.scss'
export default function Pane(props) {
  return(
    <div className='pane'>
      <div className='left'>
        { props.left }
      </div>
      <div className='right'>
        { props.right }
      </div>
    </div>
  )
}

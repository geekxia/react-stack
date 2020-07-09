import React from 'react'

import './style.scss'

export default function Border(props) {
  return(
    <div className='border'>
      { props.children }
    </div>
  )
}

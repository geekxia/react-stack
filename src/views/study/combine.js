import React from 'react'

import { Border, Pane } from '@/components'

function Left(props) {
  return(
    <div>
      <h1>left pane</h1>
    </div>
  )
}

function Right(props) {
  return(
    <div>
      <h1>right pane</h1>
    </div>
  )
}

export default class Combine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <Border>
          <h2>Welcome</h2>
          <p>Thank you for visiting our space.</p>
        </Border>

        <Border>
          <h2>Warnning</h2>
          <p>Thank you for visiting our space.</p>
        </Border>

        <Pane left={<Left />} right={<Right />}></Pane>
      </div>
    )
  }
}

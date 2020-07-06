import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'welcome to react'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

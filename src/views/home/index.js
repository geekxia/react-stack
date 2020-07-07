import React from 'react'

import { Child, Child2 } from '@/components'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'welcome to react'
    }
    this.xxxHandle1 = this.xxxHandle.bind(this, 'arg')
  }
  xxxHandle(arg, e) {
    console.log('xxx', arg, e)
  }
  render() {
    return(
      <div>
        <h1>{this.state.msg}</h1>
        <h1>{this.props.aaa}</h1>
        <Child msg='2'></Child>
        <Child2 msg={this.state.msg} onXXX={this.xxxHandle.bind(this)}></Child2>
        <button onClick={(e)=>this.xxxHandle('arg', e)}>点击</button>
        <button onClick={this.xxxHandle.bind(this, 'arg')}>点击</button>
        <button onClick={this.xxxHandle1}>点击</button>

      </div>
    )
  }
}

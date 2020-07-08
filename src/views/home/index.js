import React from 'react'

import { Child, Child2 } from '@/components'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'welcome to react',
      val: 1,
      val2: 2
    }
    this.xxxHandle1 = this.xxxHandle.bind(this, 'arg')
  }
  xxxHandle(arg, e) {
    this.props.onTest('1','2', 3)
  }
  change(idx, e) {
    console.log(e)
    switch(idx) {
      case 1:
        this.setState({
          val: e.target.value
        })
        break
      case 2:
        this.setState({
          val2: e.target.value
        })
        break
      default:
    }
    
  }
  keyupHandle(e) {
    console.log(e.keyCode)
  }
  getInputVal() {
    console.log(this.refs.aaa.value)
    this.refs.bbb.style.color = 'red'
  }
  render() {
    console.log(this.props)
    return(
      <div>

        <button onClick={this.xxxHandle.bind(this)}>测试事件</button>
        <button onClick={this.props.onTest.bind(this,1,2,5)}>测试事件</button>
        <br />

        <div ref='bbb'>230203</div>

        <input ref='aaa' value={this.state.val} onChange={this.change.bind(this, 1)} />
        <input defaultValue={this.state.val2} onInput={this.change.bind(this, 2)} onKeyUp={this.keyupHandle.bind(this)} />
        <button onClick={this.getInputVal.bind(this)}>按钮</button>

      </div>
    )
  }
}

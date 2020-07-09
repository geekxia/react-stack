import React from 'react'

import { Child, Child2 } from '@/components'
import { useHistory } from 'react-router-dom'

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
  skip() {
    // let history = useHistory()
    console.log(this.props)
    // 动态路由
    this.props.history.push('/home/detail/0')
  }
  render() {
    // console.log(this.props)
    return(
      <div>

          <h1>首页</h1>
          <button onClick={this.skip.bind(this)}>跳转</button>

      </div>
    )
  }
}

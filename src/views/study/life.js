import React from 'react'

import {ThemeCtx} from '@/utils/theme'
class Life extends React.Component {
  // 挂载

  // 不要使用setState
  // 不要把 props值赋值给state
  constructor(props) {
    super(props)
    this.state = {
      msg: 1
    }
    console.log('----constructor')
  }
  static getDerivedStateFromProps() {
    console.log('----getDerivedStateFromProps')
    return null
  }
  // componentWillMount() {
  //   console.log('----componentWillMount')
  // }
  componentDidMount() {
    console.log('----componentDidMount')
    console.log('props', this.props)
  }

  // 更新
  shouldComponentUpdate(prevProps, prevState, snapshot) {
    console.log('----shouldComponentUpdate')
    console.log(prevProps, prevState, snapshot)
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('----getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('----componentDidUpdate')
  }

  // 卸载
  componentWillUnmount() {
    console.log('----componentWillUnmount')
  }


  // 错误处理
  static getDerivedStateFromError() {
    console.log('----getDerivedStateFromError')
  }
  componentDidCatch() {
    console.log('----componentDidCatch')
  }



  click() {
    this.setState({
      msg: 100
    })
  }

  // 必须的，且是纯函数
  render() {
    console.log('----render')
    let xxx = this.context
    console.log('context', xxx)
    return(
      <React.Fragment>
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.click.bind(this)}>点击</button>
      </div>
      <div>121212</div>
      <h1>9020023</h1>
      </React.Fragment>
    )
  }
}

Life.contextType = ThemeCtx

export default Life

import React from 'react'

import './assets/style.css'
import '@/assets/common.css'
import '@/assets/style.scss'

import fetch from './utils/fetch'

// 组件
// import Home from '@/views/Home'
import { Home } from '@/views/'

export default class App extends React.Component {
  testHandle(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
  }
  getRef() {
    console.log(this.refs.c.xxxHandle())
  }
  render() {
    return(
      <div>
      <h1>Hello React 2</h1>
        <Home ref='c' aaa='1' onTest={this.testHandle}></Home>
        <button onClick={this.getRef.bind(this)}></button>
      </div>
    )
  }
  
}

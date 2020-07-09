import React, { Suspense } from 'react'

import './assets/style.css'
import '@/assets/common.css'
import '@/assets/style.scss'

import fetch from './utils/fetch'

// 组件
// import Home from '@/views/Home'
import { Home, Combine, Life, TestHoc } from '@/views/'
// let Life = React.lazy(()=>import('@/views/study/life'))

import { ThemeCtx } from '@/utils/theme'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: { color: 'white', background:'black'},
      light: { color: 'blue', background: 'white'}
    }
  }
  testHandle(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
  }
  getRef() {
    console.log(this.refs.c.xxxHandle())
  }
  render() {
    return(
      <ThemeCtx.Provider value={this.state.dark}>
        <TestHoc></TestHoc>
      </ThemeCtx.Provider>
    )
  }

}

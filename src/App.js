import React from 'react'

import './assets/style.css'
import '@/assets/common.css'
import '@/assets/style.scss'

import fetch from './utils/fetch'

// 组件
import Home from '@/views/Home'

export default function App() {
  return(
    <div>
    <h1>Hello React 2</h1>
    <Home></Home>
    </div>
  )
}

import React from 'react'
import Home from './home'
import Detail from './home/detail'

import Combine from './study/combine'
import Life from './study/life'
import TestHoc from './study/testhoc'
import HookExample from './study/hook'




const routes = [
  {
    id: 1,
    path: '/home',
    component: Home,
    title: '我的首页',
    children: [
      {
        id: 11,
        path: '/home/detail/:id',
        component: Detail,
        title: '详情页'
      }
    ]
  },
  {
    id: 2,
    path: '/combine',
    component: Combine,
    title: '测试组合'
  },
  {
    id: 3,
    path: '/life',
    component: Life,
    title: '生命周期'
  },
  {
    id: 4,
    path: '/hoc',
    component: TestHoc,
    title: '高阶组件'
  },
  {
    id: 5,
    path: '/hook',
    component: HookExample,
    title: 'Hook组件'
  }
]

export {
    Home,
    Combine,
    Life,
    TestHoc
}

export default routes

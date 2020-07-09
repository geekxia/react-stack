import React, { Suspense } from 'react'

import './assets/style.css'
import '@/assets/common.css'
import '@/assets/style.scss'

import fetch from './utils/fetch'

// 组件

import { Home, Combine, Life, TestHoc } from '@/views/'

import { ThemeCtx } from '@/utils/theme'

import { HashRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/views'

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

  createRoute() {
    var res = []
    routes.map(ele=>{
      res.push(<Route exact key={ele.id} path={ele.path} component={ele.component}></Route>)
      if(ele.children) {
        ele.children.map(ele=>{
          res.push(<Route exact key={ele.id} path={ele.path} component={ele.component}></Route>)
        })
      }
    })
    return res
  }
  createLink() {
    return routes.map(ele=>(
      <NavLink exact key={ele.id} to={ele.path} activeClassName='on'>{ele.title}</NavLink>
    ))
  }
  render() {
    return(
      <HashRouter>
        <div>
          {this.createLink()}
        </div>
        <div>
          <Switch>
            { this.createRoute() }
            <Redirect from='/*' to='/home'></Redirect>
          </Switch>

        </div>
      </HashRouter>
    )
  }

}

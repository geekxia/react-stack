import React from 'react'
import '@/assets/css/sytle.scss'
import { ThemeContext, theme } from '@/utils/theme'

import {
  HashRouter,
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import routes from '@/views'

console.log('routes', routes)
import store from '@/store'
import { Provider } from 'mobx-react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    // 声明式数据
    this.state = {
      msg: 'hello 2001',
      curTheme: theme.dark
    }
  }


  changeTheme() {
    var i = Math.random()
    if(i< 0.3) {
      this.setState({curTheme: theme.dark})
    } else if(i<0.6 && i>0.3) {
      this.setState({curTheme: theme.light})
    } else {
      this.setState({curTheme: theme.pink})
    }
  }

  // 生成侧边导航
  createNavLink() {
    return routes.map(ele=>(
      <div key={ele.id} className='link'>
        <NavLink exact activeClassName='on' to={ele.path}>{ele.text}</NavLink>
      </div>
    ))
  }
  // 生成视图容器
  // exact完全匹配
  // Route和Switch是直接父子关系，中间不能其它的元素包裹
  createRoute() {
    var res = []
    routes.map(ele=>{
      res.push(
        <Route
          key={ele.id}
          exact
          path={ele.path}
          component={ele.component}
        ></Route>
      )
      if(ele.children) {
        ele.children.map(ele=>{
          res.push(
            <Route
              key={ele.id}
              exact
              path={ele.path}
              component={ele.component}
            ></Route>
          )
        })
      }
    })
    return res
  }

  render() {
    let { curTheme } = this.state
    return (
      <HashRouter>
        <Provider store={store}>
          <div className='app'>
            {/*上下文是给 TestCtx 这个组件来使用*/}
            <ThemeContext.Provider value={curTheme}>
              <div className='left'>
                { this.createNavLink() }
              </div>
              <div className='right'>
                {/*保证匹配关系，只有一个成立，避免一对多的匹配关系*/}
                <Switch>
                  {/*一组匹配规则，从上到下进行匹配*/}
                  { this.createRoute() }
                  <Redirect from='/*' to='/'></Redirect>
                </Switch>
              </div>
            </ThemeContext.Provider>
          </div>
        </Provider>

      </HashRouter>
    )
  }
}

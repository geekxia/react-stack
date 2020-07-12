import React from 'react'

import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'lisi' },
        { id: 2, name: 'zhangsan' },
        { id: 3, name: 'wangwu'}
      ]
    }
  }

  skipToDetail(ele) {
    this.props.history.push('/home/detail/'+ele.id+'/'+ele.name)
  }

  createList() {
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id} onClick={this.skipToDetail.bind(this,ele)}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
  }

  changeMsg() {
    this.props.store.TodoStroe.changeMsg('hello mobx-react')
  }


  render() {
    let { TodoStroe } = this.props.store
    return (
      <div>
        <h1>首页</h1>
        {this.createList()}
        <hr/>
        <h3>{TodoStroe.msg}</h3>
        <button onClick={this.changeMsg.bind(this)}>改变store</button>
        <hr/>
        <h3>{TodoStroe.count}</h3>
        <h3>{TodoStroe.count2}</h3>
        <button onClick={()=>TodoStroe.add()}>增加</button>
      </div>
    )
  }
}

export default Home

import React from 'react'

export default class Home extends React.Component{

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


  render() {
    return (
      <div>
        <h1>首页</h1>
        {this.createList()}
      </div>
    )
  }
}

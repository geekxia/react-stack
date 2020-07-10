import React from 'react'

export default class Detail extends React.Component{

  componentDidMount() {
    console.log('detail', this.props)
    // 根据列表的id，调接口，获取详情
  }

  render() {
    let { match } = this.props
    return (
      <div>
        <h1>详情页</h1>
        <h3>{match.params.id}</h3>
        <h3>{match.params.name}</h3>
      </div>
    )
  }
}

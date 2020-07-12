import React from 'react'

import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Detail extends React.Component{

  componentDidMount() {
    console.log('detail', this.props)
    // 根据列表的id，调接口，获取详情
  }

  render() {
    let { match } = this.props
    let { TodoStroe } = this.props.store
    return (
      <div>
        <h1>详情页<span>{TodoStroe.count}</span></h1>
        <h3>{match.params.id}</h3>
        <h3>{match.params.name}</h3>
      </div>
    )
  }
}

export default Detail

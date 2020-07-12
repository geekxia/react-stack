import React from 'react'

// prop-types 用于规范子组件的自定义属性

import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Child3 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('child3', this.props)
    console.log(11)
  }
  skip() {
    // this.props.history.push('/')
    this.props.history.goBack()

  }
  render() {
    return(
      <div>
        <h3>子组件 - 3</h3>
        <h3>{this.props.aaa}</h3>
        <button onClick={this.skip.bind(this)}>回到首页</button>
      </div>
    )
  }
}

// 检测数据类型
Child3.propTypes = {
  aaa: PropTypes.string,
  bbb: PropTypes.bool.isRequired
}

export default withRouter(Child3)

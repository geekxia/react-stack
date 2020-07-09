import React from 'react'

import hoc from '@/utils/hoc'

'@hoc'
class TestHoc extends React.Component {
  render() {
    return(
      <div>
        {this.props.create()}
        <div onClick={this.props.click.bind(this)}>0000</div>
        <h3>{this.props.msg}</h3>
      </div>
    )
  }
}

// export default hoc(TestHoc)
export default TestHoc

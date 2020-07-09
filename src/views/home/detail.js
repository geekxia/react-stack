import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

class Detail extends React.Component {
  render() {
    console.log('detail', this.props)
    return(
      <div>
          <h1>详情页</h1>
      </div>
    )
  }
}

export default withRouter(Detail)


// export default function Detail(props) {
//   function click() {
//     console.log('useHistory', useHistory())
//   }
//   return(
//     <div>
//         <h1 onClick={click}>详情页</h1>
//     </div>
//   )
// }

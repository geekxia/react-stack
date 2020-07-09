import React from 'react'

export default function hoc(Wrapped) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        msg: 1234
      }
    }
    componentDidMount() {
      console.log('hoc mounted')
    }
    _click() {
      console.log('hoc click', this)
    }
    _create() {
      return(
        <div>hoc create title</div>
      )
    }
    render() {
      return(
        <div>
          <h1>hoc title</h1>
          <Wrapped msg={this.state.msg} click={this._click} create={this._create}></Wrapped>
          <h1>hoc footer</h1>
        </div>
      )
    }
  }
}

import { observable, action, computed, autorun } from 'mobx'

export default class TodoStroe {
  @observable msg = 'hello mobx'
  @observable count = 80

  @action changeMsg(payload) {
    this.msg = payload
  }
  @action add() {
    this.count++
  }

  @computed get count2() {
    return this.count*100
  }
  disposer = autorun(() => {
    setTimeout(()=>{
      this.count = 30
    }, 2000)
  })
}

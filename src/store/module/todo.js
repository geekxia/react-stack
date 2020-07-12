import { observable, action, computed, autorun } from 'mobx'

export default class TodoStroe {
  @observable msg = 'hello mobx'
  @observable count = 0

  @action changeMsg(payload) {
    this.msg = payload
  }
  @action add() {
    this.count++
  }

  @computed get count2() {
    return this.count*100
  }
}

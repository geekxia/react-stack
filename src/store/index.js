import TodoStroe from './module/todo'

class Store {
  constructor() {
    this.TodoStroe = new TodoStroe()
  }
}

export default new Store()

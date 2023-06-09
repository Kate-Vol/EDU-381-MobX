import {makeAutoObservable, observable} from "mobx";

class Todo {
  todos = [
    {id:1, title:'Go to the shop', completed: false},
    {id:2, title:'See TV', completed: false},
    {id:3, title:'Give Like', completed: false}]
  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }
}
export default new Todo()
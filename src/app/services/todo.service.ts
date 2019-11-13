import { Injectable } from '@angular/core';
import {Todo} from '../Model/todo';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index < 0) {
      alert('todo innexistant');
    } else {
      this.todos.splice(index, 1);
    }
  }
  logTodos() {
    this.loggerService.logger(this.todos);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: Todo;

  URI = "http://localhost:3000";

  constructor(private http: HttpClient) {}

 
    getTodos(): Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.URI}/todo`);
    }

    save(todo: Todo){
      return this.http.post<Todo>(`${this.URI}/todo`, todo);
    }

    update(todo: Todo){
      return this.http.put<Todo>(`${this.URI}/todo/${todo.title}`, todo);
    }

    delete(title: number){
      return this.http.delete<Todo>(`${this.URI}/todo/${title}`);
    }

    setter(todo: Todo){
      this.todo = todo;
    }

    getter(){
      return this.todo;
    }

}
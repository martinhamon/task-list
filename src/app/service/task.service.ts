import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import {HttpClient, HttpHandler} from '@angular/common/http'
import {TASKS} from 'src/app/mock-task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl : string ="http://localhost:5000/tasks"
  constructor(
    private http: HttpClient
  ) { }

  getTask() : Observable < Task[]> {
    //const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }
}

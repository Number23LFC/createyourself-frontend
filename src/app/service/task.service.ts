import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Celebration} from '../model/Celebration';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {Objective} from '../model/Objective';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {}

  private celebrationUrl = 'http://localhost:8080/tasks';

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.celebrationUrl);
  }

  getTasksCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.celebrationUrl + '/categories');
  }

  findTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(this.celebrationUrl + '/' + id);
  }

  getTasksByCategoryName(categoryName: String): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.celebrationUrl + '/category=' + categoryName);
  }

  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.celebrationUrl , task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.celebrationUrl}/${id}`, { responseType: 'text' });
  }

}

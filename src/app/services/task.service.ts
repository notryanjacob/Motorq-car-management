import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/visits';

  constructor(private http: HttpClient) { }

  getTasksToday(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/durationd');
  }
  getTasksThisMonth(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/thisMonth');
  }
  getTasksThisYear(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/thisYear');
  }
  getTasksAllTime(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/allTime');
  }
  getTasksAsc() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/durationa');
  }
}

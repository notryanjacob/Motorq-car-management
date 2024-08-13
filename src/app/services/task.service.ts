import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addDriver(driver: any) : Observable<any>{
    return this.http.post(this.baseUrl + '/driver',driver);
  }

  assignVehicle(va:any) : Observable<any>{
    return this.http.post(this.baseUrl+'/assignVehicle', va);
  }
  // assignVehicle(name: string, licensePlate: string, startTime: number, endTime: number): Observable<any> {
  //   const url = `${this.baseUrl}/assignVehicle`;
  //   const params = new HttpParams()
  //     .set('name', name)
  //     .set('licensePlate', licensePlate)
  //     .set('startTime', startTime.toString())
  //     .set('endTime', endTime.toString());
  //   return this.http.post(url, null, { params });
  // }

  unassignVehicle(name: string): Observable<any> {
    const url = `${this.baseUrl}/unassignVehicle/${name}`;
    return this.http.post(url, null);
  }

  getDriverByName(name: String) : Observable<any>{
    return this.http.get(this.baseUrl+`/driver/findName/${name}`);
  }
  getDriverByNumber(number: String) : Observable<any>{
    return this.http.get(this.baseUrl+`/driver/findNumber/${number}`);
  }






  apiUrl: String ="";
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
  //unused tasks
  getUnusedTasksToday(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/unusedToday');
  }
  getUnusedTasksThisMonth(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/unusedThisMonth');
  }
  getUnusedTasksThisYear(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/unusedThisYear');
  }
  getUnusedTasksAllTime(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/task-time/unusedAllTime');
  }

  addTrackableUrl(newTrackableUrl: String): Observable<String>{
    return this.http.post<String>(this.apiUrl+'/trackable-url', newTrackableUrl);
  }
}

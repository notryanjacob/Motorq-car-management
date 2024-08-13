import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
  //     .set('startTime', startTime)
  //     .set('endTime', endTime);
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

  getAllDrivers(): Observable<any>{
    return this.http.get(this.baseUrl+`/driver/findAll`);
  }
  getDriversByLocation(): Observable<any>{
    return this.http.get(this.baseUrl+`/driver/getLocation/${location}`);
  }
}

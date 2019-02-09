import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Celebration} from '../model/Celebration';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class CelebrationService {

  constructor(private http: HttpClient) {}

  private celebrationUrl = 'http://localhost:8080/celebrations';

  getCelebrations(): Observable<Array<Celebration>> {
    return this.http.get<Array<Celebration>>(this.celebrationUrl);
  }

  findCelebrationById(id: number): Observable<Celebration> {
    return this.http.get<Celebration>(this.celebrationUrl + '/' + id);
  }

  createCelebration(celebration): Observable<Celebration> {
    return this.http.post<Celebration>(this.celebrationUrl , celebration);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.celebrationUrl}/${id}`, { responseType: 'text' });
  }

}

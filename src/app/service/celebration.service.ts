import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Celebration} from '../model/Celebration';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class CelebrationService {

  constructor(private http: HttpClient) {}

  private celebrationUrl = 'http://localhost:8080/';

  getCelebrations(): Observable<Array<Celebration>> {
    return this.http.get<Array<Celebration>>(this.celebrationUrl + 'celebrations');
  }

  // public deleteUser(user) {
  //   return this.http.delete(this.celebrationUrl + '/'+ celebration.id);
  // }
  //
  // public createUser(user) {
  //   return this.http.post<User>(this.celebrationUrl, user);
  // }

}

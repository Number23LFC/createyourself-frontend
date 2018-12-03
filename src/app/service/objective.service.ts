import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Objective} from '../model/Objective';
import {Category} from '../model/Category';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class ObjectiveService {

  constructor(private http: HttpClient) {}

  private objectivesUrl = 'http://localhost:8080/objectives';

  getObjectives(): Observable<Array<Objective>> {
    return this.http.get<Array<Objective>>(this.objectivesUrl);
  }

  getObjectivesByCategoryName(categoryName: String): Observable<Array<Objective>> {
    return this.http.get<Array<Objective>>(this.objectivesUrl + '/category=' + categoryName);
  }

  getDoneObjectivesCount(): Observable<number> {
    return this.http.get<number>(this.objectivesUrl + '/stats');
  }

  createObjective(objective): Observable<Objective> {
    return this.http.post<Objective>(this.objectivesUrl , objective);
  }
}


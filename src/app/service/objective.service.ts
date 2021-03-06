import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Objective} from '../model/Objective';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class ObjectiveService {

  constructor(private http: HttpClient) {
  }

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

  getTodoObjectivesCount(): Observable<number> {
    return this.http.get<number>(this.objectivesUrl + '/stats/todo');
  }

  getAllObjectivesCount(): Observable<number> {
    return this.http.get<number>(this.objectivesUrl + '/stats/all');
  }

  createObjective(objective): Observable<Objective> {
    return this.http.post<Objective>(this.objectivesUrl, objective);
  }

  getObjectiveById(id: number): Observable<Objective> {
    return this.http.get<Objective>(this.objectivesUrl + '/' + id);
  }

  markObjectiveAsDone(id: number): Observable<Objective> {
    return this.http.get<Objective>(this.objectivesUrl + '/' + id + '/done');
  }

  uploadImage(objectiveId: number, file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.objectivesUrl + '/' + objectiveId + '/image', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  deleteObjective(id: number): Observable<any> {
    return this.http.delete(`${this.objectivesUrl}/${id}`, { responseType: 'text' });
  }

}


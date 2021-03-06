import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';
import {Objective} from '../model/Objective';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {}

  private categoriesUrl = 'http://localhost:8080/categories';

  getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.categoriesUrl);
  }

  createCategory(category): Observable<Category> {
    return this.http.post<Category>(this.categoriesUrl , category);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(this.categoriesUrl + '/' + id);
  }

  deleteCategory(id: number): Observable<any> {
    console.log('usuwam: ' + id);
    return this.http.delete(`${this.categoriesUrl}/${id}`, { responseType: 'text' });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  addUser (user: User): Observable<User> {
    console.log("server delete");
    console.log(user);
  const url = `http://localhost:3000/api/customerManagement/customer`;
  return this.http.post<User>(`http://localhost:3000/api/customerManagement/customer`, user);
  }
}

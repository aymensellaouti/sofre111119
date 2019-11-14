import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
const API_LINK = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(credentials): Observable<any> {
    return this.http.post(API_LINK, credentials);
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

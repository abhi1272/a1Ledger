import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.url;
  constructor(public http: HttpClient, public router: Router) { };

  // sendOtp(email) {
  //   return this.http.post(`${this.apiUrl}/signup`, email)
  // };

  // confirmOtp(obj) {
  //   return this.http.post(`${this.apiUrl}/validate_signup_attempt`, obj)
  // };

  signUp(user: Object) {
    return this.http.post(`${this.apiUrl}/users/signup`, user)
      .pipe(map(({ data }: any) => {
        this.setToken(data.token);
      }));
  };

  login(user: Object) {
    return this.http.post(`${this.apiUrl}/users/login`, user)
      .pipe(map(({ data }: any) => {
        this.setToken(data);
      }));
  };

  setToken(data: any) {
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.router.navigate(['/dashboard']);
  };

  getToken() {
    const currentUserData = localStorage.getItem('currentUser')
    if (currentUserData) {
      return JSON.parse(currentUserData).token
    }
  }

  getUser() {
    const currentUserData = localStorage.getItem('currentUser')
    if (currentUserData) {
      return JSON.parse(currentUserData).user
    }
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  };

  forgetPassword(user: Object): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/forgot_password`, user);
  };

  resetPassword(user: Object): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/reset_password`, user);
  };

}

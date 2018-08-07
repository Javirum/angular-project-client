import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();


  // userChange$: Observable<any> = this.userChange.asObservable();



  private baseUrl = environment.apiUrl + '/auth';
  constructor(private httpClient: HttpClient) {
  }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me() {
    const options = {
      withCredentials: true,
    };
    return this.httpClient.get(`${this.baseUrl}/me`, options)
      .toPromise()
      .catch((err) => {
        if (err.status === 404) {
          return null;
        } else {
          Promise.reject(new Error('unexpected error'));
        }
      });
  }
  signup(username: string, password: string, location: string) {
    const options = {
      withCredentials: true
    };
    const data = { username, password, location };
    return this.httpClient.post(`${this.baseUrl}/signup`, data, options)
      .toPromise();
  }

  login(username: string, password: string) {
    console.log(username, password, );
    const options = {
      withCredentials: true
    };
    const data = { username, password };
    return this.httpClient.post(`${this.baseUrl}/login`, data, options)
      .toPromise();
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/logout`, {}, options)
      .toPromise()
      .then(() => this.setUser());
  }

  getUser(): any {
    return this.user;
  }
}

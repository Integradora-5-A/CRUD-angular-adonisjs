import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  exp: number;
  iat: number;
  uid: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@Injectable()
export class Authservice {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  private saveToken(token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoaggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`/users/register`, user);
  }

  public register2(user: TokenPayload): Observable<any> {
    return this.http.post(`/emp/register`, user);
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/users/login`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
      })
    );
    return request;
  }

  public login2(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/emp/login`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
      })
    );
    return request;
  }

  public profile(id): Observable<any> {
    return this.http.get(`/users/getusers/${id}`);
  }

  public profile2(id): Observable<any> {
    return this.http.get(`/emp/getuser/${id}`);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexpro/login';
  }

  public login(ussername: string, clave: string): Observable<any> {
    const credentials = {username: ussername, password: clave};
    return this.http.post(this.baseUrl, credentials, {observe: 'response'});
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLogged(): boolean {
    return localStorage.getItem('token') !== null;
  }

}

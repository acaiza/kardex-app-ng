import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexpro/';
  }

  public obtenerComprasPorUsuario(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const userName = localStorage.getItem('userName');
    const url = `${this.baseUrl}compra/obtenerComprasPorUsuario/${userName}`;
    return this.http.get<any[]>(url, {headers});
  }

}

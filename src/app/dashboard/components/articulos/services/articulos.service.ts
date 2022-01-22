import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import {Articulos} from '../models/articulos';
import {Categoria} from '../models/categoria';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexpro/';
  }

  public obtenerArticulos(): Observable<Articulos[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}articulo/obtenerArticulos`;
    return this.http.get<Articulos[]>(url, {headers});
  }

  public obtenerCategorias(): Observable<Categoria[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}categoria/obtenerCategorias`;
    return this.http.get<Categoria[]>(url, {headers});
  }

  registrarArticulo(articulo: Articulos): Observable<void> {
    const url = `${this.baseUrl}articulo/registrarArticulo`;
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    return this.http.post<void>(url, articulo, { headers }).pipe(
    catchError(error => {
      console.log('Caught in CatchError. Returning 0')
      return throwError(error);
    }));
  }
  
}

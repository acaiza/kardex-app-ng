import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articulos} from '../../articulos/models/articulos';
import {TipoPago} from '../models/tipoPago';
import {Compra} from '../models/compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = '/kardexpro/';
  }

  public obtenerArticulosConStock(): Observable<Articulos[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}compra/obtenerArticulosConStock`;
    return this.http.get<Articulos[]>(url, {headers});
  }

  public obtenerTiposPago(): Observable<TipoPago[]> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    const url = `${this.baseUrl}tipopago/obtenerTiposPago`;
    return this.http.get<TipoPago[]>(url, {headers});
  }

  realizarCompra(compra: Compra): Observable<void> {
    const url = `${this.baseUrl}compra/realizarCompra`;
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token'));
    compra.username = localStorage.getItem('userName');
    return this.http.post<void>(url, compra, {headers});
  }

}

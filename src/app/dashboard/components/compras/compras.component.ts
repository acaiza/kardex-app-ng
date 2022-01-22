import {Component, OnInit} from '@angular/core';
import {Articulos} from '../articulos/models/articulos';
import {ComprasService} from './services/compras.service';
import {ComprasConstant} from './constans/compras.constant';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {TipoPago} from './models/tipoPago';
import { Compra } from './models/compra';
import { DetalleCompra } from './models/detalleCompra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  articulos: Articulos[];
  tipoPagos: TipoPago[];
  tableHeaders = ComprasConstant.table.headers;
  titles = ComprasConstant.titles;
  articulosSeleccionados: Articulos[];
  tableHeadersCompra = ComprasConstant.table.headersCompra;
  tipoPagoSeleccionado: TipoPago;

  constructor(private cmprasService: ComprasService, private messageService: ToastrService, private loading: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.articulos = [];
    this.cmprasService.obtenerArticulosConStock().subscribe(data => {
      this.articulos = data;
    });
    this.cmprasService.obtenerTiposPago().subscribe(data => {
      this.tipoPagos = data;
      this.tipoPagoSeleccionado = this.tipoPagos[0];
    });
  }

  validarExistencia(articulo: Articulos): void {
    if (articulo.cantidad > articulo.existencia) {
      articulo.cantidad = articulo.existencia;
      this.messageService.warning(this.titles.sinExistencia);
    }
  }

  comprar(): void {
    try {
      this.vlidarCantidadIngresada();
      this.loading.show();
      this.cmprasService.realizarCompra(this.crearParametroPedido()).subscribe(() => {
        this.articulosSeleccionados = [];
        this.messageService.info(this.titles.registro);
        this.cmprasService.obtenerArticulosConStock().subscribe(data => {
          this.articulos = data;
          this.loading.hide();
        });
      });
    } catch (e) {
      this.messageService.error(e.message);
    }
  }

  private vlidarCantidadIngresada(): void {
    if(this.articulosSeleccionados == null){
      throw new Error(this.titles.sinArticulos);
    }
    for (const articulo of this.articulosSeleccionados) {
      if (!articulo.cantidad  || articulo.cantidad <= 0) {
        throw new Error(this.titles.sinCantidad);
      }
    }
  }

  crearParametroPedido(): Compra {
    const detalleCompra: DetalleCompra[] = [];
    this.articulosSeleccionados.forEach(articulo => {
      detalleCompra.push({
        idArticulo: articulo.idArticulo,
        cantidad: articulo.cantidad,
        precio: articulo.precio,
        existencia: articulo.existencia
      });
    });
    return {
      idTipoPago: this.tipoPagoSeleccionado.idTipoPago,
      detalleCompra: detalleCompra
    };
  }

}

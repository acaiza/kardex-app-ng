import {DetalleCompra} from './detalleCompra';

export interface Compra {

  idTipoPago: number;

  username?: string;

  detalleCompra: DetalleCompra[];

}

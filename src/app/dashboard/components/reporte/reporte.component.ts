import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReporteService} from './services/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  pedidos: any[];

  constructor(private reporteService: ReporteService, private messageService: ToastrService, private loading: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.reporteService.obtenerPedidosPorUsuario().subscribe(data => {
      this.pedidos = data;
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteComponent } from './reporte.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RippleModule,
    FormsModule
  ]
})
export class ReporteModule { }

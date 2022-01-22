import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [ComprasComponent],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    FormsModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class ComprasModule { }

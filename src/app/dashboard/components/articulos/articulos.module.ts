import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticulosComponent} from './articulos.component';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [ArticulosComponent],
  imports: [
    CommonModule,
    PanelModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DropdownModule
  ]
})
export class ArticulosModule {
}

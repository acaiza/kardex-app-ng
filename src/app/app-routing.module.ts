import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {PrivatePageGuardServiceService} from './login/services/private-page-guard-service.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticulosComponent} from './dashboard/components/articulos/articulos.component';
import {ComprasComponent} from './dashboard/components/compras/compras.component';
import {ReporteComponent} from './dashboard/components/reporte/reporte.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [PrivatePageGuardServiceService],
    children: [
      {path: 'articulos', component: ArticulosComponent},
      {path: 'compras', component: ComprasComponent},
      {path: 'reporte', component: ReporteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

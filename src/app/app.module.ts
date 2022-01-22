import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {LoginModule} from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    LoginModule,
    DashboardModule,
    HttpClientModule,
    ToastrModule.forRoot({
      progressBar: true, positionClass: 'toast-bottom-full-width'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

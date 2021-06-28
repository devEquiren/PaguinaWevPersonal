import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';

const routes: Routes = [
  { path: '', component: VistaInicialComponent }
  ]


@NgModule({
  declarations: [
    AppComponent,
    VistaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

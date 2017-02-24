import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MasterURLService} from "./services/master-url.service";
import {HomeComponent} from './home/home.component';
import {routing} from "./app.routes";
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';

// DECORATOR
// @Decorator({objeto con la definicion del decorador})


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    ProductoComponent
  ],
  imports: [
    //se definen las palicaciones que se van a usar
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    //se definen aqui los servicios que se van a usar
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

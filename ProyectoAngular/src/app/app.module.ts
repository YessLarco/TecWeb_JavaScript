import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MasterURLService} from "./services/master-url.service";

// DECORATOR
// @Decorator({objeto con la definicion del decorador})



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //se definen las palicaciones que se van a usar
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    //se definen aqui los servicios que se van a usar
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

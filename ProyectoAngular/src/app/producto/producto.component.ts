import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MasterURLService} from "../services/master-url.service";
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  private _parametros:any;
  productos=[];

  constructor(private _ActivatedRoute: ActivatedRoute,
  private _http: Http,
  private _masterUrl: MasterURLService) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterUrl.url+'Producto?idTienda='+this._parametros.idTienda).subscribe(
        (res:Response)=>{
          this.productos=res.json();
        },
        (err)=>{
          console.log(err);
        }
      )
    })
  }

}

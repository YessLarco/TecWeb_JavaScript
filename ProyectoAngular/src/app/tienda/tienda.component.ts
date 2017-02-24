import { Component, OnInit } from '@angular/core';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  title: string = "Bienvenido a ingresar Tiendas";

  nuevaTienda: any = {};
  tiendas = [];
  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterUrl: MasterURLService) {
    console.log("Se inicio el contructor")
  }

  ngOnInit() {
    //Aqui es donde se van a cargar los datos que ya se tienen guardado, para no utilizar funciones
    this._http.get(this._masterUrl.url + "Tienda")
      .subscribe(
        (res: Response) => {
          console.log(res.json());
          this.tiendas = res.json()
            .map((value)=>{
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      );
    console.log("On Init")
  }

  crearTienda(formulario: NgForm) {

    console.log("Estoy en la funcion crear");
    console.log(formulario);
    this._http.post(this._masterUrl.url + "Tienda", {
      nombre: formulario.value.nombre
    })
      .subscribe((res) => {
          console.log("No hubo errores");
          console.log(res);
          this.tiendas.push(res.json());
          this.nuevaTienda = {};
          this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        },
        (err) => {
          console.log("Ocurrió un error ", err);
        },
        () => {
          console.log("Termino la funcion vamos a la casa");
        }
      );

  }

  borrarTienda(id:number){
    this._http.delete(this._masterUrl.url+"Tienda/"+id)
      .subscribe(
        (res)=>{
          let tiendaBorrada = res.json();
          this.tiendas=this.tiendas.filter(value=>tiendaBorrada.id!=value.id);
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  actualizarTienda(tienda:any){
    let parametros = {
      nombre:tienda.nombre
    };
    this._http.put(this._masterUrl.url+"Tienda/"+tienda.id,parametros)
      .subscribe(
        (res:Response)=>{
          tienda.formularioCerrado = !tienda.formularioCerrado;
          console.log("Respuesta:",res.json());
        },
        (err)=>{
          console.log("Error",err);
        }
      )
  }

}

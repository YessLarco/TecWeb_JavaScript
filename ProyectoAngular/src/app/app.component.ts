import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title: string = "Hola amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanioH4="51px";

  nuevaTienda:any={};

  constructor() {
    this.apellido = "Larco";
    this.nombre = "Yessenia";
    console.log("Se inicio el contructor")
  }

  ngOnInit() {
    //Aqui es donde se van a cargar los datos, para no utilizar funciones
    this.apellido = "Andrade";
    this.nombre = "Carolina";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  hizoClick() {
    console.log("Hizo click");
    console.log()
  }

  hizoFocus(){
    console.log("Hizo focus");
  }

  crearTienda(formulario){
    console.log(formulario);
  }

}

import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'home/app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {
    console.log("Se inicio el contructor")
  }

  ngOnInit() {
    //Aqui es donde se van a cargar los datos que ya se tienen guardado, para no utilizar funciones

  }


}

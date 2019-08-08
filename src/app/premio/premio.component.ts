import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  lugar:string;
  ruta:string;
  public foto = '';

  constructor() { 
    this.lugar = "";
    this.ruta = "";
  }

  ngOnInit() {
  }

  checkPremio(lugar:string){
    if(lugar.toLowerCase() == "jardin botanico"){
      console.log("yas");
      this.lugar = "Jardín Botánico";
      this.foto = require("../../images/jardin.jpg");
    }else if(lugar.toLowerCase() == "sofa"){
      console.log("yas");
      this.lugar = "SOFA";
      this.foto = require("../../images/sofa.gif");
    }else{
      this.lugar = "Oye tramposa ese código no es válido 😡."
      this.foto = '';
    }
  }

}

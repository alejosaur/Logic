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
      this.lugar = "Jardín Botánico";
      this.foto = require("../../images/jardin.jpg");
    }else if(lugar.toLowerCase() == "sofa"){
      this.lugar = "SOFA";
      this.foto = require("../../images/sofa.gif");
    }else if(lugar.toLowerCase() == "noruefa"){
      this.lugar = "Noruefa";
      this.foto = require("../../images/noruefa.jpg");
    }else if(lugar.toLowerCase() == "mundo aventura"){
      this.lugar = "Mundo Aventura";
      this.foto = require("../../images/mundoaventura.jpg");
    }else if(lugar.toLowerCase() == "lofeo"){
      this.lugar = "Oye, te lofeo";
      this.foto = require("../../images/noruefa.jpg");
    }else if(lugar.toLowerCase() == "unal"){
      this.lugar = "Universidad Nacional de Colombia";
      this.foto = require("../../images/unal.jpg");
    }else if(lugar.toLowerCase() == "servil"){
      this.lugar = "Servil";
      this.foto = require("../../images/servil.jpg");
    }else if(lugar.toLowerCase() == "sueños"){
      this.lugar = "Sueños";
      this.foto = require("../../assets/img/gallery/preview_s/IMG_20180121_155339.jpg");
    }else{
      this.lugar = "Oye tramposa ese código no es válido 😡."
      this.foto = '';
    }
  }

}

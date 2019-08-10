import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiar',
  templateUrl: './estudiar.component.html',
  styleUrls: ['./estudiar.component.css']
})
export class EstudiarComponent implements OnInit {

  queEstudiar:string;
  clavePremio:string;

  constructor() {
    this.queEstudiar = "";
    this.clavePremio = "";
  }

  ngOnInit() {
  }

  elegirEstudiar(tema:string){
    this.queEstudiar = tema;
  }

  checkAnswers(respuestas:string){
    if(this.queEstudiar == '¿Simple o compuesta?'){
      if(respuestas.toLowerCase() == 'snnscscscnnsnccc'){
        this.clavePremio = "Código premio: Mundo Aventura"
      }else{
        this.clavePremio = "Ups, tienes algo mal 🙁 ¡Revisa tus respuestas o corre a preguntarle a tu novio!."
      }
    }else if(this.queEstudiar == 'Evaluar proposiciones'){
      if(respuestas.toUpperCase() == 'FFVVVVFFFFVVF'){
        this.clavePremio = "Código premio: Jardin Botanico"
      }else{
        this.clavePremio = "Ups, tienes algo mal 🙁 ¡Revisa tus respuestas o corre a preguntarle a tu novio!."
      }
    }
  }
}

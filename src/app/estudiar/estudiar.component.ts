import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiar',
  templateUrl: './estudiar.component.html',
  styleUrls: ['./estudiar.component.css']
})
export class EstudiarComponent implements OnInit {

  queEstudiar:string;

  constructor() {
    this.queEstudiar = "";
  }

  ngOnInit() {
    console.log("tema");
  }

  elegirEstudiar(tema:string){
    this.queEstudiar = tema;
    console.log("tema");
  }

}

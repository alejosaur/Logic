import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  lugar:string;
  ruta:string;

  constructor() { 
    this.lugar = "";
    this.ruta = "";
  }

  ngOnInit() {
  }

}

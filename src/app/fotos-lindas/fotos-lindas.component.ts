import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos-lindas',
  templateUrl: './fotos-lindas.component.html',
  styleUrls: ['./fotos-lindas.component.css']
})
export class FotosLindasComponent implements OnInit {

  private foto = require("../../images/construction.jpg");

  constructor() { }

  ngOnInit() {
  }

}

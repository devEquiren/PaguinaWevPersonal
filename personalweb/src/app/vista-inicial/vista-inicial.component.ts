import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-inicial',
  templateUrl: './vista-inicial.component.html',
  styleUrls: ['./vista-inicial.component.scss']
})
export class VistaInicialComponent implements OnInit {

  constructor() { }

  subtitulos: String[] = ["Master en tecnologias Web.",
  "Desarrollo Movil",
  "Desarrollo Web",
  "Desarrollo de servicios",
  "Integracion de tecnologias.",
]
indiceST: number = 0;
subtitulo: String = this.subtitulos[this.indiceST]

ngOnInit(): void {
  setTimeout(() =>{ 
    this.cambiaTitulo()
  }, 3000);
}

cambiaTitulo(){
  this.indiceST++
  if(this.indiceST >= this.subtitulos.length){
    this.indiceST = 0
  }
  this.subtitulo = this.subtitulos[this.indiceST]
  setTimeout(() =>{ 
    this.cambiaTitulo()
  }, 3000);
}

}

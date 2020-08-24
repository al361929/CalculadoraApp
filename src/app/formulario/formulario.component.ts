import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() sumaRealizada = new EventEmitter<number>();
  numA:number;
  numB:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSumar(){
    let resultado = this.numA + this.numB
    this.sumaRealizada.emit(resultado);
  }

}

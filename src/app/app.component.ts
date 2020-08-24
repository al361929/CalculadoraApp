import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculadoraApp';
  resPadre:number;

  onSumaRealizada(resultado:number){
    this.resPadre = resultado;
  }
}

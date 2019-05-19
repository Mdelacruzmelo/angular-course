import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'aprendiendo-angular';
  public description: string = 'Mi curso de inicio con angular js';
  public togglear_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
  }

  cambiarTitulo(){  
    this.title = "Titulo Cambiado";
  }

  toggleVideojuego(value){
    this.togglear_videojuegos = value;
  }
}
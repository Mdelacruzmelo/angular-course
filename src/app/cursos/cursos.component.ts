import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers;
       // el + para convertirlo en number ya que no lo tienena la hora de compilar, esto viene asincrono

      if (this.nombre == 'ninguno') {
        this._router.navigate(['/home']);
      }

      //console.log(this.nombre);
    })
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }

}

import { Component } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatillas.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent {
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.titulo = "Componente de zapatillas";
        console.log('Componente de zapatilla cargado exitosamente');

    }
    ngOnInit() {
        //alert(this._zapatillaService.getTexto());
        this.zapatillas = this._zapatillaService.getZapatillas();
    }
}
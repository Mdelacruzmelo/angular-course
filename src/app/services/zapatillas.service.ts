import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;// usamos objeto zapatilla
    constructor() {
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
            new Zapatilla('Adidas Basketball', 'Adidas', 'Blancas', 39, true),
            new Zapatilla('Reebook Light', 'Reebook', 'Negras', 140, true),
            new Zapatilla('Lumberjack Sports', 'Lumberjack', 'Marrones', 20, true),
        ];
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }

}
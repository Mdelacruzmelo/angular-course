import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    
    templateUrl:'/videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    constructor() {
        console.log('1.- Se ha cargado el constructor');
    }

    ngOnInit(){
        console.log('2.- Se ha cargado el ngOnInit');
    }

    ngDoCheck(){
        console.log('3.- Se ha cargado el ngDoCheck');
    }

    ngOnDestroy(){
        console.log('4.- Se ha cargado el ngOnDestroy ');
    }
}
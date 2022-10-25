import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Flash', 'Green Arrow', 'Superman', 'Savitar', 'Zoom'];

  reorderDisable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {

    /* Cortamos el elemento que estamos seleccionando, solo 1 y esto regresa un nuevo arreglo de los elemnots que estamos cortando, por eso le pongo 
    l [0] por que solo quiero 1 */

    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    // aqui le decimos que vamos a insertar el elemento que acabamos de cortar en la posicion en la que se esta colocando
    this.personajes.splice(event.detail.to, 0, itemMover);

    event.detail.complete();

    console.log(this.personajes);
    
    
  }

  toggleReorder() {
    
  }

}

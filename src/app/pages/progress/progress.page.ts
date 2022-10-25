import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  onIonChange(event: any) {
    // dividimos entre 100 el event.detail.value para que nos muestre valores del 0 al 1 (0.10, 0.20) ya que el progress utiliza valores de 0 a 1
   this.porcentaje = event.detail.value / 100;
    
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  // Recibir información del componente padre
  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    // Cerrar el modal
    this.modalController.dismiss();
  }

  salirConArgumentos() {

    // Regresar o mandar Información al padre
    this.modalController.dismiss({
      nombre: 'Jesús',
      pais: 'España'
    });
  }

}

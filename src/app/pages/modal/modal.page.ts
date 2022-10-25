import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {



  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  // Abrir el modal
  async mostrarModal() {

    const modal = await this.modalController.create({
      // Pagina del modal
      component: ModalInfoPage,
      // Mandar propiedades al modal (hijo)
      componentProps: {
        nombre: 'Antonio',
        pais: 'México'
      }
    });
    await modal.present();

    // Recibir información del modal
    // desestructuracion {data}

    //onDidDismiss muestra la informacion una vez que termina la animacion o se cierra por completo el modal
    //onWillDismiss muestra la informacion antes de que termine la animacion o se cierre por completo el modale, es mas rapido
    const {data} = await modal.onDidDismiss();
    console.log('onDidDismiss');
    


    console.log(data);
    

  }

}

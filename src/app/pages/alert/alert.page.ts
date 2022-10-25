import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertPromp() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'OK',
          handler:(data:any) => {
            console.log(data)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler:(data:any) => {
            console.log('Confirm Cancel')
          }
        }
      ],
      inputs: [
        {
          name: 'name1',
          placeholder: 'Name',
          type: 'text',
        },
        {
          name: 'name2',
          placeholder: 'Nickname (max 8 characters)',
          type: 'text',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          placeholder: 'Paragraph',
          type: 'textarea',
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          placeholder: 'Paragraph',
          type: 'url',
        },
        // INPUT TYPE DATE WITH MIN, MAX
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2022-10-21'
        },
        // INPUT TYPE DATE, WITHOUT MIN, MAX
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2022-10-21'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
      ],
    });

    await alert.present();
  }

  onClick() {
    this.presentAlert();
  }

}

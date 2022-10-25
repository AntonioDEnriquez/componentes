import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private http: DataService) { }

  ngOnInit() {
    this.componentes = this.http.getMenuOpt();
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }



}

import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent implements OnInit {
  componentes: Observable<Componente[]>;

  constructor(private dataService: DataService) {
      
  }
  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpt();
  }

}

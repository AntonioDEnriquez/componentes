import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20);

  // Referencia al componente InfiteScroll que se utiliza en el html
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    // console.log(event);
    if(this.data.length > 50) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return
    }

    setTimeout(() => {

      const nuevoArr = Array(20);

      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();
    }, 1500);
    
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    // Importar Ionic Module cuando no reconosca los elementos
    IonicModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapaappComponent } from './mapaapp/mapaapp.component';
import { RhorasComponent } from './rhoras/rhoras.component';

@NgModule({
  declarations: [
  MapaappComponent,
  RhorasComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MapaappComponent,
    RhorasComponent
  ]
})
export class ComponentModuleModule { }

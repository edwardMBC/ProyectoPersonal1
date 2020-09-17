import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapaappComponent } from './mapaapp/mapaapp.component';
import { RhorasComponent } from './rhoras/rhoras.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
  MapaappComponent,
  RhorasComponent,
  CalculadoraComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MapaappComponent,
    RhorasComponent,
    CalculadoraComponent]
})
export class ComponentModuleModule { }

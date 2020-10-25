import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapaappComponent } from './mapaapp/mapaapp.component';
import { RhorasComponent } from './rhoras/rhoras.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
  MapaappComponent,
  RhorasComponent,
  CalculadoraComponent,
  CarritoComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MapaappComponent,
    RhorasComponent,
    CalculadoraComponent,
    CarritoComponent]
})
export class ComponentModuleModule { }

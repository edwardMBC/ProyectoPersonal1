import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentModuleModule } from '../Componentes/component-module.module';
import { ReutiModule } from '../reutilizables/reuti.module';

import { DescrippersoComponent } from './descripperso/descripperso.component';
import { HomeComponent } from './home/home.component';
import { ProyectospComponent } from './proyectosp/proyectosp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TiendaComponent } from './tienda/tienda.component';



@NgModule({
  declarations: [
  DescrippersoComponent,
  HomeComponent,
  ProyectospComponent,
  DashboardComponent,
  NopagefoundComponent,
  GaleriaComponent,
  TiendaComponent
  ],
  imports: [
    CommonModule,
    ComponentModuleModule,
    AppRoutingModule,
    ReutiModule
  ],
  exports: [
    DescrippersoComponent,
    HomeComponent,
    ProyectospComponent,
    DashboardComponent,
    NopagefoundComponent,
    GaleriaComponent,
    TiendaComponent
  ]
})
export class PagesModuleModule { }

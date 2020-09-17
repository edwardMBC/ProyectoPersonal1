import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DescrippersoComponent } from './descripperso/descripperso.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProyectospComponent } from './proyectosp/proyectosp.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children:[
      {path:'', component:HomeComponent},
      {path: 'descripccionpersonal', component:DescrippersoComponent},
      {path: 'Proyectos', component: ProyectospComponent},
      {path: 'Galeria', component: GaleriaComponent}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule { }

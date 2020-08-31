import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './Pages/pages-routing.module';

import { NopagefoundComponent } from './Pages/nopagefound/nopagefound.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent}


];

@NgModule({
  declarations:[],
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

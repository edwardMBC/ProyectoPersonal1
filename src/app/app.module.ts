import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PagesModuleModule } from './Pages/pages-module.module';

@NgModule({

  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    HttpClientModule,
    PagesModuleModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

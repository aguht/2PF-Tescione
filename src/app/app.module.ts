import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaRoutingComponent } from './feature/lista/lista-routing.module';
import { FormularioRoutingComponent } from './feature/formulario/formulario-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ListaRoutingComponent,
    FormularioRoutingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioRoutingModule } from './feature/formulario/formulario-routing.module';
import { ListaModule } from './feature/lista/lista.module';
import { FormularioModule } from './feature/formulario/formulario.module';
import { CoreModule } from './core/core.module';
import { ListaRoutingModule } from './feature/lista/lista-routing.module';
import { TitulosDirective } from './shared/titulos.directive';

@NgModule({
  declarations: [AppComponent, TitulosDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ListaModule,
    FormularioModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

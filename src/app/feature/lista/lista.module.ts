import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { ListaRoutingComponent } from './lista-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ListaRoutingComponent,
    RouterModule
  ]
})
export class ListaModule { }

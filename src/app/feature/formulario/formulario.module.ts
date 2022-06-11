import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormularioRoutingComponent } from './formulario-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioRoutingComponent,
    RouterModule
  ]
})
export class FormularioModule { }

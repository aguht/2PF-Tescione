import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UnionPipe } from './Pipes/union.pipe';



@NgModule({
  declarations: [
    UnionPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UnionPipe
  ]
})
export class SharedModule { }

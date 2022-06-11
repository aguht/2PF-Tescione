import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/shared/alumno.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() alumnos:Alumno[];
  @Output() alumnoToEdit= new EventEmitter<Alumno>(); 
  @Output() alumnosUpdated = new EventEmitter<Alumno[] | null>(); 
  displayedColumns=['estudiante', 'dni', 'curso', 'delete'];
  @ViewChild('table') table: MatTable<any>;
  nombreApellido: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRow(el:Alumno){
    this.alumnoToEdit.emit(el);
  }

  onDeleteElement(el:any){
    let index=this.alumnos.findIndex(x=> x.id===el.id);
    this.alumnos.splice(index,1);
    this.table.renderRows();
    this.alumnosUpdated.emit(this.alumnos);
  }

}

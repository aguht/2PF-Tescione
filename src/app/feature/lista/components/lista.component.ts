import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Alumno } from 'src/app/shared/alumno.interface';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  
  displayedColumns=['estudiante', 'dni', 'curso', 'delete'];
  @ViewChild('table') table: MatTable<any>;
  nombreApellido: string;
  alumnoss:any;

  constructor(private router:Router, private alumnosService:AlumnosService) { }

  ngOnInit(): void {
    this.alumnosService.getListaAlumnos().subscribe(
      (val)=>this.alumnoss=val
    )
  }

  onClickRow(el:any){
    this.alumnosService.alumnoToEdit=el
    this.router.navigate(['/form/form'])
  }

  /*onDeleteElement(el:any){
    let index=this.alumnoss.findIndex(x=> x.id===el.id);
    this.alumnoss.splice(index,1);
    this.table.renderRows();
    this.alumnosUpdated.emit(this.alumnoss);
  }*/

}

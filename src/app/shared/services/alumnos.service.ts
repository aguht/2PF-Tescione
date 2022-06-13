import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

listaAlumnos:any=[];
alumnoToEdit:any;

constructor() {}

getListaAlumnos():Observable<any> {
  return of(this.listaAlumnos)
}

getAlumnoToEdit():Observable<any> {
  return of (this.alumnoToEdit);
}

}

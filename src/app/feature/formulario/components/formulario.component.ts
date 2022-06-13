import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/shared/alumno.interface';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  alumnoForm:FormGroup;
  alumnoToEdit:any;

  constructor(private fb: FormBuilder, private alumnosService:AlumnosService, private router:Router) { }

  ngOnInit(): void {
    this.alumnoForm=this.fb.group({
      nombreAlumno:['', Validators.required],
      apellidoAlumno:['', Validators.required],
      dniAlumno:['', Validators.required],
      cursoAlumno:['', Validators.required]
    })

    this.alumnosService.getAlumnoToEdit().subscribe(
      val=>this.alumnoToEdit=val
    )

    if(this.alumnoToEdit){
      this.alumnoForm.get('nombreAlumno')?.patchValue(this.alumnoToEdit.nombreAlumno);
      this.alumnoForm.get('apellidoAlumno')?.patchValue(this.alumnoToEdit.apellidoAlumno);
      this.alumnoForm.get('dnialumno')?.patchValue(this.alumnoToEdit.dniAlumno);
      this.alumnoForm.get('cursoAlumno')?.patchValue(this.alumnoToEdit.cursoAlumno);
    }
  }

  onSubmit(){
    let alumnos=[];
    this.alumnosService.getListaAlumnos().subscribe(
      (val)=>alumnos=val
    )
    let index=1;
    if(alumnos.length>0 && !this.alumnoToEdit){
      index=alumnos.length+1;
      this.alumnoForm.value['id']=index;
      alumnos.push(this.alumnoForm.value);
    }else if(alumnos.length===0 && !this.alumnoToEdit){
      this.alumnoForm.value['id']=index;
      alumnos.push(this.alumnoForm.value)
    }
    
    if(this.alumnoToEdit){
    let indice=alumnos.findIndex((x)=>x.id===this.alumnoToEdit.id);
    alumnos[indice]=this.alumnoForm.value;
    }

    this.alumnosService.listaAlumnos=alumnos!;
    this.router.navigate(['/lista/alumnos']);
    
  }

}

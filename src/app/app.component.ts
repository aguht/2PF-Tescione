import { Component } from '@angular/core';
import { Alumno } from './shared/alumno.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entrega6pf2';

data:any=[]; 
  dataSubmitted=false;
  alumnoToEdit:Alumno|null;

  onItemAdd(e:any){
    let index=1;
    if(this.data.length>0){
      index=this.data.length+1;
      e['id']=index;
      this.data.push(e);
    }else{
      e['id']=index;
      this.data.push(e)
    }
    this.dataSubmitted=true;
  }

  onItemEdit(e:any){
    let index=this.data.findIndex((x:Alumno)=>x.id===e.id);
    this.data[index]=e;
    this.dataSubmitted=true;
  }

  onPassEdit(e:any){
    this.dataSubmitted=false;
    this.alumnoToEdit=e;
  }

  onClickAdd(){
    this.dataSubmitted=false;
    this.alumnoToEdit=null;
  }

  onUpdateDeleteAlumnos(el:any){
    el.forEach((el:any,index:number)=>{
      el['id']=index+1
    })
    this.data=el;
  }

}

import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() ref1:boolean;
  

  @ViewChild("appcomponent") appcomponent: AppComponent;
  
  constructor(private router:Router) { }

  ngOnInit(): void { }

  nuevoE(){
    this.router.navigate(['/form/form']);
  }

  showList(){
    this.router.navigate(['/lista/alumnos'])
  }


}

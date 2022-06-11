import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioModule } from './feature/formulario/formulario.module';
import { ListaModule } from './feature/lista/lista.module';

import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

const routes: Routes = [
  {path:'lista', loadChildren:() => import('./feature/lista/lista.module').then(m=>ListaModule)},
  {path:'form', loadChildren:() => import('./feature/formulario/formulario.module').then(m=>FormularioModule)},
  {path:'', redirectTo: '/lista', pathMatch:'full'},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

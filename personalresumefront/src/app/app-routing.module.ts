import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
{
    path:'',
    component: InicioComponent,
    pathMatch: "full"
    
  },
  {
    path:"educacion",
    loadChildren: ()=> import('./educacion/educacion-routing.module').then( m => m.EducacionRoutingModule)
  },
  {
    path:"login",
    component : LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

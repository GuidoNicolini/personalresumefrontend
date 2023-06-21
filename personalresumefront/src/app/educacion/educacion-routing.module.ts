import { NgModule } from '@angular/core';
import { PageEducacionComponent } from './pages/page-educacion/page-educacion.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPageEducacionComponent } from './pages/edit-page-educacion/edit-page-educacion.component';
import { CreateEducacionComponent } from './pages/create-educacion/create-educacion.component';
import { UpdateEducacionComponent } from './pages/update-educacion/update-educacion.component';



const routes: Routes = [
  {
    path: '',
    component: PageEducacionComponent,
    children: [
      { path: 'actualizar', component: EditPageEducacionComponent },
      { path: 'crear', component: CreateEducacionComponent },
      { path: 'actualizar/:id', component: UpdateEducacionComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class EducacionRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEducacionComponent } from './pages/page-educacion/page-educacion.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPageEducacionComponent } from './pages/edit-page-educacion/edit-page-educacion.component';
import { CreateEducacionComponent } from './pages/create-educacion/create-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEducacionComponent } from './pages/update-educacion/update-educacion.component';
import { EducacionRoutingModule } from './educacion-routing.module';




@NgModule({
  declarations: [
    PageEducacionComponent,
    EditPageEducacionComponent,
    CreateEducacionComponent,
    UpdateEducacionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EducacionRoutingModule
  ],
  exports: [
    PageEducacionComponent
  ]
})
export class EducacionModule { }

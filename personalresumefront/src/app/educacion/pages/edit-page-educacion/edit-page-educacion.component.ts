import { Component } from '@angular/core';
import { EducacionService } from '../../services/educacion.service';
import { Education } from '../../interfaces/educacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page-educacion',
  templateUrl: './edit-page-educacion.component.html',
  styleUrls: ['./edit-page-educacion.component.css']
})
export class EditPageEducacionComponent {

  educations !: Education[];

  constructor(private service:EducacionService,private router:Router){
    this.service.getEducations().subscribe(resp => this.educations = resp);

  }


  deleteEducation(idEducation:String){
    this.service.deleteEducation(idEducation).subscribe();
  }

  updateEducation(idEducation:String){
    this.router.navigate([`/educacion/actualizar/${idEducation}`])
  }

  createEducation(){
    this.router.navigate([`/educacion/crear/`])
  }
}

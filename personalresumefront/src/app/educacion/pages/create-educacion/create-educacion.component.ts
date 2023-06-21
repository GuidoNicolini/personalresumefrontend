import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../services/educacion.service';

@Component({
  selector: 'app-create-educacion',
  templateUrl: './create-educacion.component.html',
  styleUrls: ['./create-educacion.component.css']
})
export class CreateEducacionComponent implements OnInit{

  myForm !: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private service:EducacionService){

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      degree: ['', Validators.required],
      description: ['', Validators.required],
      establishment: ['', Validators.required],
      logo: ['', Validators.required],
      idProfile:["",Validators.required]
    });
  }

  submitForm(){
    const formData = this.myForm.value;
    this.service.createEducation(formData).subscribe();
  }

}

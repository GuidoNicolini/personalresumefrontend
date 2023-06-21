import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../services/educacion.service';
import { Education, } from '../../interfaces/educacion';
import { ActivatedRoute } from '@angular/router';
import {  Subscription, interval, timer } from 'rxjs';


@Component({
  selector: 'app-update-educacion',
  templateUrl: './update-educacion.component.html',
  styleUrls: ['./update-educacion.component.css']
})
export class UpdateEducacionComponent implements OnInit {

  myForm !: FormGroup;
  education !: Education;
  showForm = false;
  private subscription!: Subscription;


  constructor(private formBuilder: FormBuilder, private service: EducacionService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.service.getEducationById(params['id']).subscribe(resp => {
        this.education = resp;

      })
    })

  }

  ngOnInit(): void {
    const interval$ = interval(1000);

    this.myForm = new FormGroup({
      degree: new FormControl(),
      description: new FormControl(),
      establishment: new FormControl(),
      logo: new FormControl(),
      idProfile: new FormControl()
    })

    this.subscription = interval$.subscribe((valor) => {


      if (this.education !== undefined) {
        this.myForm.setValue({
          degree: this.education.degree,
          description: this.education.description,
          establishment: this.education.establishment,
          logo: this.education.logo,
          idProfile: this.education.profile.id

        })
        this.showForm = true;
        this.subscription.unsubscribe();

      }
    })

  }

  submitForm() {
    const formData = this.myForm.value;
    console.log(formData);
    this.route.params.subscribe(params => {
      this.service.updateEducation(params['id'], formData).subscribe();
    })

  }

}

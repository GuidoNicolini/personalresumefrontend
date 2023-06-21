import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,private localStorage: LocalStorageService){

    this.myForm = new FormGroup({
      username : new FormControl(),
      password : new FormControl(),
    })
  }

  submitForm(){
   this.localStorage.setItem("user",this.myForm.value.username);
    this.localStorage.setItem("password",this.myForm.value.password);
  }

}

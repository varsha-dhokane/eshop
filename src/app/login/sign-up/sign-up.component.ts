import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm !: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  
  initializeForm(){
  this.signUpForm =this.fb.group({
    'username':["",[Validators.required]],
    'mobile':["",[Validators.required]],
    'password':["",[Validators.required]],
    'conPassword':["",[Validators.required]],
  })
  }

  signUp(){

  }

  redirectSignIn(){
    
  }
}

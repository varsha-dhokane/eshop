import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm !:FormGroup
@Output() emit:EventEmitter<any> = new EventEmitter()
// @Output() emitSignInAction: EventEmitter<String> = new EventEmitter();
  constructor(private fb:FormBuilder) { }



  ngOnInit(): void {
    this.signInForm = this.fb.group({
      'username':['',[Validators.required]],
      'password':['',[Validators.required]]
    })
  }

  signIn(){
    console.log(this.signInForm)
  }

  emitActionSign(){
   this.emit.emit('signUp')
  }
}

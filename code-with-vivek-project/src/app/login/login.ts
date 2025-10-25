import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


  // email = new FormControl();
  // password = new FormControl();

  loginForm: FormGroup = new FormGroup({});

  UserData: { email: string, password: string }[] = []

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      age: ['', [Validators.required, Validators.min(18)]]
    })

  }

  // submit() {
  //   console.log(this.email.value)
  //   console.log(this.password.value)
  //   this.UserData.push({ email: this.email.value, password: this.password.value })
  // }


  // Update(email: string) {
  //   let user = this.UserData.find((u) => u.email == email)
  //   if (user != null && user) {
  //     this.email.setValue(user.email)
  //     this.password.setValue(user.password)
  //   }

  // }

  submit1() {
    console.log(this.loginForm.value)
  }

  get name() {
    return this.loginForm.get('name');
  }
  get age() {
    return this.loginForm.get('age');
  }
  get email() {
    return this.loginForm.get('email');
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  showValidationErrors = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]] 
    });
  }

  get emailControl() {return this.loginForm.get('email');}

  get passwordControl() {return this.loginForm.get('password');}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.showValidationErrors = false;
    } else {
      this.showValidationErrors = true;
    }
  }
}

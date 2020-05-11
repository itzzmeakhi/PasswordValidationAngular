import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordValidators } from './validators/password.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  passwordForm : FormGroup;

  ngOnInit() {
    this.passwordForm = new FormGroup({
      'password' : new FormControl('', [Validators.required, PasswordValidators.passwordStrength])
    })
  }

  onFormSubmit() {
    console.log(this.password);
  }

  get password() {
    return this.passwordForm.get('password');
  }
}

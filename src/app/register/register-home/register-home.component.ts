import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from "../../shared/services/register.service"
import { LoginService } from 'ontimize-web-ngx';


@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.scss']
})
export class RegisterHomeComponent implements OnInit {
  
  registerForm: FormGroup;
  usernameexist = false;
  mailexists = false;
  pdoesnt_match = false;

  constructor(private registerService: RegisterService) {

  }

  ngOnInit() {

    const userCtrl: FormControl = new FormControl('', Validators.required);
    const emailCtrl: FormControl = new FormControl('', Validators.required);
    const pwdCtrl: FormControl = new FormControl('', Validators.required);
    const pwd_cCtrl: FormControl = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({});
    this.registerForm.addControl('username', userCtrl);
    this.registerForm.addControl('email', emailCtrl);
    this.registerForm.addControl('password', pwdCtrl);
    this.registerForm.addControl('password_confirm', pwd_cCtrl);

  }

  createAccount() {

    const userName = this.registerForm.value['username'];
    const email = this.registerForm.value['email'];
    const password = this.registerForm.value['password'];
    const password_confirm = this.registerForm.value['password_confirm'];

    if (password == password_confirm){
      this.pdoesnt_match = false;
      this.registerService.createUserAccount(userName, password, email)
      .subscribe();

  }else {
    
    this.pdoesnt_match = true;

  }

  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup;

  constructor(private router: Router, private authService: AuthServiceService){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  navigateToSignUpPage(): void{
    this.router.navigate(['/signUp']);
  }

  logIn():void{
    
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("success login");
      },
      (error) => {
        console.log("Error login");
      }
    );
  }

}

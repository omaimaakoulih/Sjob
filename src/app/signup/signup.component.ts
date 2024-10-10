import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { countries } from '../mock/countries';
import { countryPhoneCodes } from '../mock/phoneCodes';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signUpForm: FormGroup;
  countries: string[];
  phoneCodes: string[];

  constructor(){}

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      country: new FormControl(''),
      phoneCode: new FormControl(''),
      phone: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl('')
    });

    this.countries = countries;
    this.phoneCodes = countryPhoneCodes;

  }

  signUp(){
    console.log(this.signUpForm.value);
  }

}

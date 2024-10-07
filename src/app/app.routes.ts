import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'signUp', component: SignupComponent}
];

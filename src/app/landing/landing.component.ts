import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private router: Router){}

  navigateToLoginPage(): void{
    this.router.navigate(['/login']);
  }

  navigateToSignUpPage(): void{
    this.router.navigate(['/signUp']);
  }

}

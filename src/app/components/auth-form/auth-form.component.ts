import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  @Input() formType: string | undefined


  constructor(private router: Router) {
  }

  login(): void {
    this.router.navigate(['/home']);
  }

  redirectTo(): void {
    console.log('redirecting to', this.formType);
    if (this.formType === 'login') {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  redirectForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  textTitleButton(): string {
    return this.formType === 'login' ? 'Login' : 'Register';
  }

  textParagraph(): string {
    return this.formType === 'login' ? 'Register' : 'Login';
  }

  textQuestion(): string {
    return this.formType === 'login' ? 'Need an account?' : 'Already have an account?';
  }

}

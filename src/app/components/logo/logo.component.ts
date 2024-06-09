import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}

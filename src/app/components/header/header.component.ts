import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {
  }

  isScrolled() {
    console.log(window.scrollY);
    return window.scrollY > 0;
  }

}

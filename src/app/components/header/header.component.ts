import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isScrolled = false;
  //
  // constructor() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     this.isScrolled = true;
  //   } else {
  //     this.isScrolled = false;
  //   }
  // };

}

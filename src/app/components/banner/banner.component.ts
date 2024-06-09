import { Component, Input } from '@angular/core';
import {Movie} from "../../types/movies";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  @Input() movie: Movie | undefined

}

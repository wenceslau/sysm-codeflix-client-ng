import {Component, OnInit} from '@angular/core';
import {Movie} from '../../types/movies';
import {ApiMovieService} from '../../services/api-movie.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private apiMovieService: ApiMovieService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')?.toString() || '';
      this.apiMovieService.getMovieById(id)
        .subscribe({
          next: (data) => {
            console.log('getMovieById', data);
            this.movie = data;
          },
          error: (e) => console.error(e)
        });
    });

  }

}

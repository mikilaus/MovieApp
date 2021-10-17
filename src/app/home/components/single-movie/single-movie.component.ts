import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'],
})
export class SingleMovieComponent implements OnInit {
  @Input() movie: Movie;

  imdbResultsData: any = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.loadMovie();
  }

  loadMovie() {
    return this.movieService.getImdbRating(this.movie.id).subscribe((data) => {
      this.imdbResultsData = data;
    });
  }
}

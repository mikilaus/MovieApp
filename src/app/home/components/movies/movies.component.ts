import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { Movie } from './movie.model';
import { mockMovies } from './mockMovies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = mockMovies;
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    return this.movieService.getTopMovies().subscribe((data) => {
      if (data.items.length > 0) {
        this.movies = data.items;
      }
    });
  }
}

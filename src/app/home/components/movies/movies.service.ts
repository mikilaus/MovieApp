import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

interface Items {
  items: Movie[];
}

interface Ratings {
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: string;
  imDb: string;
  metacritic: string;
  theMovieDb: string;
  rottenTomatoes: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  tV_com: string;
  filmAffinity: string;
  errorMessage: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  imdbApiUrl: string = environment.imdbApiUrl;
  imdbApiKey: string = environment.imdbApiKey;
  imdbRatingsUrl: string = environment.imdbRatingsUrl;

  constructor(private http: HttpClient) {}

  getTopMovies(): Observable<Items> {
    return this.http.get<Items>(`${this.imdbApiUrl}${this.imdbApiKey}`);
  }

  getImdbRating(movieId): Observable<any> {
    return this.http.get<Ratings>(
      `${this.imdbRatingsUrl}${this.imdbApiKey}/${movieId}`
    );
  }
}

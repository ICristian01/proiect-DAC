import { Injectable } from '@angular/core';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      title: 'Inception',
      releaseYear: 2010,
      director: 'Christopher Nolan',
      budget: 160000000,
      rating: 7.6
    },
    {
      title: '127 Hours',
      releaseYear: 2010,
      director: 'Danny Boyle',
      budget: 18000000,
      rating: 7.6
    },
    {
      title: 'The Pursuit of Happyness',
      releaseYear: 2006,
      director: 'Gabriele Muccino',
      budget: 55000000,
      rating: 8
    },
    {
      title: 'Avatar',
      releaseYear: 2009,
      director: 'James Cameron',
      budget: 237000000,
      rating: 7.8
    },
    {
      title: 'The Shawshank Redemption',
      releaseYear: 1994,
      director: 'Frank Darabont',
      budget: 25000000,
      rating: 9.3
    },
    
  ];
    getMovies(): Movie[] {
      return this.movies;
    }
  
    setMovies(movies: Movie[]) {
      this.movies = movies;
    }
  
    sortByYear(): Movie[] {
      return this.movies.sort((a, b) => a.releaseYear - b.releaseYear);
    }

    sortByTitle(): Movie[] {
      return this.movies.sort((a, b) => {
        if (a.title < b.title) {return -1;}
        if (a.title >b.title) {return 1;}
        return 0;
      })
    }

    sortByDirector(): Movie[] {
      return this.movies.sort((a, b) => {
        if (a.director < b.director) {return -1;}
        if (a.director >b.director) {return 1;}
        return 0;
      })
    }

    sortByBudget(): Movie[] {
      return this.movies.sort((a, b) => a.budget - b.budget);
    }

    sortByRating(): Movie[] {
      return this.movies.sort((a, b) => a.rating - b.rating);
    }
  
    searchMovie(movieName: string): Movie[]{
      return this.movies.filter((item) => item.title.includes(movieName));
    }
  
    getCertainMovie(movie: Movie): Movie | undefined {
      return this.movies.find((elem) => elem == movie);
    }
  
    addNewMovie(movie: Movie) {
      this.movies.push(movie);
      console.log(this.movies);
    }
  
    deleteMovie(movie: Movie) {
      this.movies = this.movies.filter((item) => item !== movie);
      return this.movies;
    }

  constructor() { }
}
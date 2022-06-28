import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewComponent } from 'src/app/features/add-new/add-new.component';
import { Movie } from 'src/app/features/movie';
import { MovieService } from 'src/app/features/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  searchValue: string = '';

  constructor(private movieService: MovieService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  openAddModal() {
    this.dialog.open(AddNewComponent, { width: '50vw' });
  }

  sortByTitle() {
    this.movies = this.movieService.sortByTitle();
  }

  searchMovie() {
    this.movies = this.movieService.searchMovie(this.searchValue);
  }

  deleteMovie(movie: Movie) {
    this.movies = this.movieService.deleteMovie(movie);
  }

}
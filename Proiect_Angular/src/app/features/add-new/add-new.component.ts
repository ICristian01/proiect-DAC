import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { MovieService } from '../movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie } from '../movie';



@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  form!: FormGroup;

  constructor(private movieService: MovieService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      movieTitle: new FormControl(null, Validators.required),
      movieReleaseYear: new FormControl(null, Validators.required),
      movieDirector: new FormControl(null, [Validators.required, CustomValidators.humanName]),
      movieBudget: new FormControl(null, Validators.required),
      movieRating: new FormControl(null, [Validators.required, CustomValidators.specificPrice]),
    });
  }

  addMovie() {
    if (this.form.valid) {
      const payload: Movie = {
        title: this.movieTitle?.value,
        releaseYear: this.movieReleaseYear?.value,
        director: this.movieDirector?.value,
        budget: this.movieBudget?.value,
        rating: this.movieRating?.value
      };

      this.movieService.addNewMovie(payload);
      this._snackBar.open('Movie added successfully!');
    } else {
      this._snackBar.open('The form is not valid!');
    }
  }

  get movieTitle() {
    return this.form.get('movieName');
  }

  get movieReleaseYear() {
    return this.form.get('movieReleaseYear');
  }

  get movieDirector() {
    return this.form.get('movieDirector');
  }

  get movieBudget() {
    return this.form.get('movieBudget');
  }

  get movieRating() {
    return this.form.get('movieRating');
  }
}

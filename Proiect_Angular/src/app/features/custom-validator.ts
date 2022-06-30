import { FormControl } from '@angular/forms';

export class CustomValidators {
  public static specificRating(control: FormControl) {
    return control.value < 11 && control.value > -1
      ? { 'not-in-range': true }
      : null;
  }

  //---------------------------------------------------------------------//

  public static humanName(control: FormControl) {
    const regExp = new RegExp("^s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+.?s*$");
    return regExp.test(control.value) ? null : { 'not-human-name': true };
  }
}

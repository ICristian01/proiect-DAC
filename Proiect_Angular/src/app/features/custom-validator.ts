import { FormControl } from '@angular/forms';

export class CustomValidators {
  public static specificPrice(control: FormControl) {
    return control.value < 100 || control.value > 5000
      ? { 'not-in-range': true }
      : null;
  }

  //---------------------------------------------------------------------//

  public static humanName(control: FormControl) {
    const regExp = new RegExp("^s*([A-Za-z]{1,}([.,] |[-']| ))+[A-Za-z]+.?s*$");
    return regExp.test(control.value) ? null : { 'not-human-name': true };
  }
}

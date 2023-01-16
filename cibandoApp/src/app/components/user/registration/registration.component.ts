import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form = new FormGroup(
    {
      nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      ripetiPassword: new FormControl('', [Validators.required]),
      accetto: new FormControl(true, [Validators.requiredTrue])
    }
  );

  // metodo per i template driven
  // onSubmit(form){
  //   console.log(form);
  //   console.log(form.value);
  // }

  // metodo per i reactive form
  onSubmit(){
    console.log(this.form.value);
  }
}

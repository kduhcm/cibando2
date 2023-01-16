import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm)]),
      ripetiPassword: new FormControl('', [Validators.required]),
      accetto: new FormControl(true, [Validators.requiredTrue])
    },
    [CustomValidators.MatchValidator('password', 'ripetiPassword')]
  );

  constructor(private userService: UserService, private router: Router){

  }

  // metodo per i template driven
  // onSubmit(form){
  //   console.log(form);
  //   console.log(form.value);
  // }

  // metodo per i reactive form
  onSubmit(){
    console.log(this.form.value);

    const user = { nome: this.form.value.nome, email: this.form.value.email};

    // invio dell'oggetto tramite subject
    this.userService.datiUtente.next(user);

    this.router.navigate(['home']);
  }

}

import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  datiUtente = new Subject();
  // ReplaySubject fa un ping continuo
  //datiUtente = new ReplaySubject();

  constructor() { }
}

import { Injectable } from '@angular/core';
import { User } from '../entities/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user?: User;
  constructor() { }
}

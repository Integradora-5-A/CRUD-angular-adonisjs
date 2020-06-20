import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {Authservice} from './authservice.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: Authservice, private router: Router) {
  }

  canActivate()
  {
    if (!this.auth.isLoaggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { UserLogin } from '../../models/authentication/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  user:UserLogin;
  constructor(private router: Router,
    public auth: AuthService) {
    this.auth.getUser().subscribe((user) =>
    {
      this.user = user;
    });
   }
  canActivate(state: RouterStateSnapshot) {
    if (this.user && this.user != null) 
        return true;
    else
    {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}

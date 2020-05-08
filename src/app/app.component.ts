import { AuthService } from './services/authentication/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { UserLogin } from './models/authentication/userLogin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';
  items: Observable<any[]>;
  islogued:boolean = false;
  user:UserLogin;
  constructor(public auth: AuthService,
    private router: Router) {
      this.auth.getUser().subscribe((userResult) =>
      {
        this.islogued = userResult != null;
        this.user =userResult;
        //if(!this.islogued)
         // this.router.navigate(['login']);
      }) 
  }
  async login() {
    //this.auth.login();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login'])   
  }


}

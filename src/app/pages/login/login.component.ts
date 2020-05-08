import { AuthService } from './../../services/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public auth: AuthService,
    private router: Router,
    public gameService:GameService,
    private navigation:NavigationService) {
      
    }

  ngOnInit(): void {
    this.auth.getUser().subscribe((user) =>
    {
       if(user)
       {
        //this.router.navigate(['newGame'])     
          let games = this.gameService.getGameforUserId(user.id);
          games.then((result) =>
          {
             if(result != null && result.length > 0)
             {
               let g = result[0];
               this.navigation.navigateTable(g.type);
             }
            else  
              this.router.navigate(['newGame']) 
          });
       }

    }) 
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }

}

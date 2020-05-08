import { AuthGuardService } from './authentication/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './authentication/auth.service';
import { GameService } from './game/game.service';
import { UserService } from './user/user.service';
import { TableService } from './game/table.service';
import { UserGameService } from './game/usergame.service';
import { NavigationService } from './navigation/navigation.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthGuardService,
    AuthService,
    GameService,
    UserService,
    TableService,
    UserGameService,
    NavigationService
  ]
})
export class SrviceModule { }

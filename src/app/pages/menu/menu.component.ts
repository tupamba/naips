import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../../services/user/user.service';
import { NgModule } from '@angular/core';
import { User } from '../../models/game/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  users: Observable<User[]>;
  gameName:string;
  ntNewGame:boolean = false;
  constructor(userService: UserService) {
    this.users = userService.getObserverUsers();
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  showError:boolean;
  nameGame:string;
  constructor() { }

  ngOnInit(): void {
  }
  joinGame()
  {

  }
}

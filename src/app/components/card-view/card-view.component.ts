import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/game/card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() card:Card;
  @Output() playCard:EventEmitter<Card> = new EventEmitter();
  cardType:string;
  constructor() { }

  ngOnInit(): void {
    if(this.card.type.toUpperCase() == "COPA")
      this.cardType = "./assets/images/icons/cup.png";
    else if(this.card.type.toUpperCase() == "ESPADA")
      this.cardType = "./assets/images/icons/sward.png";
    else if(this.card.type.toUpperCase() == "ORO")
      this.cardType = "./assets/images/icons/sun.jpg";
    else if(this.card.type.toUpperCase() == "BASTO")
      this.cardType = "./assets/images/icons/basto.png";
  }

}

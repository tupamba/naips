import { CardTable } from './../../models/game/cardTable';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/game/card';

@Component({
  selector: 'app-card-view-table',
  templateUrl: './card-view-table.component.html',
  styleUrls: ['./card-view-table.component.css']
})
export class CardViewTableComponent implements OnInit {
  @Input() card:CardTable;
  @Output() playCard:EventEmitter<CardTable> = new EventEmitter();
  cardType:string;
  constructor() { }

  ngOnInit(): void {
    if(this.card.card.type.toUpperCase() == "COPA")
    this.cardType = "./assets/images/icons/cup.png";
  else if(this.card.card.type.toUpperCase() == "ESPADA")
    this.cardType = "./assets/images/icons/sward.png";
  else if(this.card.card.type.toUpperCase() == "ORO")
    this.cardType = "./assets/images/icons/sun.jpg";
  else if(this.card.card.type.toUpperCase() == "BASTO")
    this.cardType = "./assets/images/icons/basto.png";
  }

}

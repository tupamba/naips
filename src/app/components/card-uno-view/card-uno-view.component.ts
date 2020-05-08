import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/game/card';

@Component({
  selector: 'app-card-uno-view',
  templateUrl: './card-uno-view.component.html',
  styleUrls: ['./card-uno-view.component.css']
})
export class CardUnoViewComponent implements OnInit {
  @Input() card:Card;
  @Output() playCard:EventEmitter<Card> = new EventEmitter();
  cardType:string;
  cardClass:string = "card-body";
  constructor() { }

  ngOnInit(): void {
    if(this.card.type.toUpperCase() == "MULTICOLOR")
      this.cardClass += " multicolor";
    else if(this.card.type.toUpperCase() == "ROJO")
      this.cardClass += " red";
    else if(this.card.type.toUpperCase() == "VERDE")
      this.cardClass += " green";
    else if(this.card.type.toUpperCase() == "AMARILLO")
      this.cardClass += " yellow";
    else if(this.card.type.toUpperCase() == "AZUL")
      this.cardClass += " blue";
  }

}

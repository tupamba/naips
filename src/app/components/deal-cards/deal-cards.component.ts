import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deal-cards',
  templateUrl: './deal-cards.component.html',
  styleUrls: ['./deal-cards.component.css']
})
export class DealCardsComponent implements OnInit {
  @Input() idModal:string;
  @Output() dealCard:EventEmitter<any> = new EventEmitter();
  chkPutSample:boolean = false;
  cardCountTable:number;
  cardCount:number;
  constructor() { }

  ngOnInit(): void {
  }
  sednData()
  {
    this.dealCard.emit({PutSample:this.chkPutSample, 
      countCardUsers:this.cardCount,
      countCardTable: this.cardCountTable});
  }

}

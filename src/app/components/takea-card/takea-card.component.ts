import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-takea-card',
  templateUrl: './takea-card.component.html',
  styleUrls: ['./takea-card.component.css']
})
export class TakeaCardComponent implements OnInit {
  @Input() idModal:string;
  @Output() takeCard:EventEmitter<any> = new EventEmitter();
  cardCount:number;
  constructor() { }

  ngOnInit(): void {
  }
  sednData()
  {
    this.takeCard.emit(this.cardCount);
  }

}

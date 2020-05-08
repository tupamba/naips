import { Component, OnInit, Input } from '@angular/core';
import { CardTable } from '../../models/game/cardTable';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-card-uno-view-table',
  templateUrl: './card-uno-view-table.component.html',
  styleUrls: ['./card-uno-view-table.component.css']
})
export class CardUnoViewTableComponent implements OnInit {
  @Input() card:CardTable;
  cardClass:string;
  constructor() { }

  ngOnInit(): void {
  }

}

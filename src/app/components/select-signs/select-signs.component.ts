import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-signs',
  templateUrl: './select-signs.component.html',
  styleUrls: ['./select-signs.component.css']
})
export class SelectSignsComponent implements OnInit {
  signs:any[] = [
    {text:"2 pieza", select:false},
    {text:"4 pieza", select:false},
    {text:"5 pieza", select:false},
    {text:"10 pieza", select:false},
    {text:"11 pieza", select:false},
    {text:"1 espada", select:false},
    {text:"1 basto", select:false},
    {text:"7 oro", select:false},
    {text:"7 espada", select:false},
    {text:"3", select:false},
    {text:"2", select:false},
    {text:"1", select:false},
    {text:"No tengno nada", select:false}]
    @Input() idModal:string;
    @Output() selectSign:EventEmitter<string[]> = new EventEmitter();
  constructor() { }
  reset(): void {
    this.signs = [
      {text:"2 pieza", select:false},
      {text:"4 pieza", select:false},
      {text:"5 pieza", select:false},
      {text:"10 pieza", select:false},
      {text:"11 pieza", select:false},
      {text:"1 espada", select:false},
      {text:"1 basto", select:false},
      {text:"7 oro", select:false},
      {text:"7 espada", select:false},
      {text:"3", select:false},
      {text:"2", select:false},
      {text:"1", select:false},
      {text:"No tengno nada", select:false}]
  }

  ngOnInit(): void {

  }
  sednData()
  {
      let sends = this.signs.filter(x => x.select);
      this.reset();
      this.selectSign.emit(sends);
  }

}


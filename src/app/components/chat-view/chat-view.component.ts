import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/game/message';


@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  @Input() chatMessages:Message[];
  @Output() newMessage:EventEmitter<string> = new EventEmitter();
  message:string;
  constructor() { }

  ngOnInit(): void {
  }
  send()
  {
      this.newMessage.emit(this.message);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../authentication/auth.service';
import { Table } from '../../models/game/table';
import { map } from 'rxjs/internal/operators/map';
import { CardTable } from '../../models/game/cardTable';
import { Message } from '../../models/game/message';
import { User } from '../../models/game/user';
import { firestore } from 'firebase/app';
import { Chat } from '../../models/game/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public firestore: AngularFirestore,
    public auth:AuthService) { }

  getChatforGameId(id:string)
  {
    let result = this.firestore.doc<Chat>("games/" + id + "/chat/one");
    return result.valueChanges().pipe(map((m) =>
    {
        let result =  m.message.reverse();
        return result;
    }));
  }

  sendMessage(id:string, message:Message)
  { 
    message.id = Date.now().toString();
    return this.firestore.collection('games').doc(id).collection('chat').
    doc('one').update({message:firestore.FieldValue.arrayUnion(JSON.parse(JSON.stringify(message)))});
  }
  async resetChatinTable(id:string)
  {
    return await this.firestore.collection('games').doc(id).collection<Table>("chat").doc("one").
    update({message:[]});
  }

}

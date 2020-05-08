import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../authentication/auth.service';
import { Table } from '../../models/game/table';
import { map } from 'rxjs/internal/operators/map';
import { CardTable } from '../../models/game/cardTable';
import { Message } from '../../models/game/message';
import { User } from '../../models/game/user';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(public firestore: AngularFirestore,
    public auth:AuthService) { }
  getTableforGameId(id:string)
  {
    let result = this.firestore.doc<Table>("games/" + id + "/tables/one");
    return result.valueChanges().pipe(map((m) =>
    {
        let result =  m.cardList.reverse();
        let p = result.filter(x => x.user.name.toUpperCase() != "MUESTRA");
        if(p && p.length > 0)
          result.filter(x => x.user.name.toUpperCase() != "MUESTRA")[0].current = true;
        let response = result.filter(x => x.user.name.toUpperCase() == "MUESTRA");
        response.push(... result.filter(x => x.user.name.toUpperCase() != "MUESTRA"));
        return response;
    }));
  }
  getCardforUserforGameId(id:string, userId:string)
  {
    let result = this.firestore.doc<User>("games/" + id + "/users/" + userId);
    return result.valueChanges().pipe(map((m) =>
    {
      if(m && m.cardList)
        return m.cardList;
        else
        return null;
    }));
  }
  async resetCardsinTable(id:string)
  {
    return await this.firestore.collection('games').doc(id).collection<Table>("tables").doc("one").
    update({cardList:[]});
  }
  async deleteCardinTable(id:string, card:CardTable[])
  {
    let remove = [new CardTable(card[0].card, card[0].user)];
    return await this.firestore.collection('games').doc(id).collection<Table>("tables").doc("one").
    update({cardList:firestore.FieldValue.arrayRemove(...JSON.parse(JSON.stringify(remove)))});
  }
}

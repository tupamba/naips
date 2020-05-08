import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../authentication/auth.service';
import { map } from 'rxjs/internal/operators/map';
import { Card } from '../../models/game/card';
import { firestore } from 'firebase/app';
import { User } from '../../models/game/user';
import { SignUser } from 'src/app/models/game/sign';

@Injectable({
  providedIn: 'root'
})
export class UserGameService {

  constructor(public firestore: AngularFirestore,
    public auth:AuthService) { }
  getUserforGameId(id:string, userId:string)
  {
    let result = this.firestore.doc<User>("games/" + id + "/users/" + userId);
    return result.valueChanges().pipe(map((m) =>
    {
        return m.cardList??null;
    }));
  }
  async resetCardsforUser(id:string, iduser:string)
  {
    return await this.firestore.collection('games').doc(id).collection<User>("users").
    doc(iduser).update({cardList:[]});
  }
  async resetSignsforUser(id:string, iduser:string)
  {
    return await this.firestore.collection('games').doc(id).collection<User>("users").
    doc(iduser).update({signs:[]});
  }
  async getUsersGame(id:string) :Promise<User[]>
  {
    return await this.firestore.collection('games').doc(id).collection<User>("users").get()
    .pipe(map((user) =>
    {
      if(user.empty)
        return null;
      else
        return user.docs.map(map => map.data() as User);
    })).toPromise();
  }
  getChangeUsersGame(id:string, currentId:string)
  {
    return this.firestore.collection('games').doc(id).
    collection<User>("users").
    valueChanges().pipe(map((user) =>
    {
      return user.filter(x => x.user.id != currentId).map(m => {
        return {cardCount:m.cardList?m.cardList.length:0, userName: m.user.name, userid: m.user.id};
      });
    }));
  }
  getSignforUsersGame(id:string, currentId:string)
  {
    return this.firestore.collection('games').doc(id).
    collection<User>("users").
    valueChanges().pipe(map((user) =>
    {
      let result = user.filter(x => x.user.id == currentId);
      if(result && result.length > 0)
        return result[0].signs;
      else
        return null;
    }));
  }
  sendSignforUsersGame(id:string, signs:SignUser[], userDestinationId:string)
  {
    return this.firestore.collection('games').doc(id).collection('users').
    doc(userDestinationId).update({signs:firestore.FieldValue.arrayUnion(...JSON.parse(JSON.stringify(signs)))});
  }
  async deleteCardofUser(id:string,idUser:string, card:Card[])
  {
    return await this.firestore.collection('games').doc(id).collection("users").doc(idUser).
    update({cardList:firestore.FieldValue.arrayRemove(...card)});

  }
  async deleteUserforGame(id:string, idUser:string)
  {
    await this.firestore.collection('games').doc(id).collection('users').
    doc(idUser).delete();
  }
}

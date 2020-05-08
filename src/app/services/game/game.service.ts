import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../../models/game/game';
import { AuthService } from '../authentication/auth.service';
import { map } from 'rxjs/internal/operators/map';
import { flatMap } from 'rxjs/operators';
import { GameModel } from './model/gameModel';
import { Table } from '../../models/game/table';
import { firestore } from 'firebase/app';
import { pipe } from 'rxjs/internal/util/pipe';
import { User } from '../../models/game/user';
import { Chat } from '../../models/game/chat';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(public firestore: AngularFirestore,
    public auth:AuthService) { }
  async createNewGame(game:Game):Promise<string>
  {
    let userItems = this.firestore.collection('games');
    let model =  new GameModel(game.name,game.owner, game.deck, game.type);
    model.users = game.users;
    return await userItems.doc(game.owner.user.id).set(JSON.parse(JSON.stringify(model))).then(() =>
    {
      let chat:Chat = { message:[], id:"one"};
      this.firestore.collection('games').doc(game.owner.user.id).collection("chat").
      doc("one").set(JSON.parse(JSON.stringify(chat))).then();
      let table = new Table();
      table.cardList = [];
      table.id = "one";
      this.firestore.collection('games').doc(game.owner.user.id).collection("tables").
      doc("one").set(JSON.parse(JSON.stringify(table))).then();
      let user = game.owner;
      user.cardList = [];
      user.signs = [];
      this.firestore.collection('games').doc(game.owner.user.id).collection("users").
      doc(user.user.id).set(JSON.parse(JSON.stringify(user))).then();
      return game.name;
    }).catch((error) =>
    {
       throw error;    
    });  
  }
  async addUsertoGame(gameid:string, user:User)
  {
    return this.firestore.collection<Game>('games').doc(gameid)
    .update({users:firestore.FieldValue.arrayUnion(user.user.id)}).then(() =>
    {
      return this.firestore.collection('games').doc(gameid).collection("users").
      doc(user.user.id).set(JSON.parse(JSON.stringify(user)));
    });

  }
  async getGame(name:string) : Promise<Game[]>
  {
    let userItems = this.firestore.collection<Game>('games',ref => ref.where('name', '==', name));
    return userItems.get().pipe(map((result) =>
    {
      if(result.empty)
        return null;
      else
      return result.docs.map(map => {
        let g = map.data() as Game;
        g.id = map.id;
        return g;
    });
  })).toPromise();
}
  getGameforId(id:string)
  {
    let result = this.firestore.collection('games').doc<Game>(id);
    return result.valueChanges();
  }
  async getGameforUserId(id:string)
  {
    let result =  this.firestore.collection<Game>('games', ref => ref.where('users', 'array-contains', id));
   //return result.valueChanges({ idField: 'id' });
   return await result.get().pipe(map((result) =>
   {
     return result.docs.map(map => {
         let g = map.data() as Game;
         g.id = map.id;
         return g;
     });
   })).toPromise();
  }
  async deleteGame(id:string)
  {
    this.firestore.collection<Game>('games').doc(id)
    .delete().then((result) =>
    {
        this.firestore.collection<Game>('games').doc(id).collection('tables').
         doc("one").delete().then();
        this.firestore.collection<Game>('games').doc(id).collection('chat').
         doc("one").delete().then();
    }
      ).catch();  
   
  }
  
  resetCardList(id:string)
  {
    return this.firestore.collection<Game>('games').doc(id).get().
    pipe(flatMap((result) =>
    {
      let deck = this.shuffle((result.data() as Game).originalDeck);
      return this.firestore.collection<Game>('games').doc(id).
      update({deck:deck});
    })).toPromise();
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
   }
}

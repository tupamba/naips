import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../../models/game/game';
import { AuthService } from '../authentication/auth.service';
import { map } from 'rxjs/internal/operators/map';
import { Card } from '../../models/game/card';
import { firestore } from 'firebase/app';
import { DeckofCard } from '../../models/game/deckofCard';
import { CardTable } from '../../models/game/cardTable';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(public firestore: AngularFirestore,
    public auth:AuthService) { }
  async getListDeckofCardsAsync(): Promise<DeckofCard[]>
  {
    return this.firestore.collection<DeckofCard>('deck').get().pipe
    (map((result) =>
    {
      return result.docs.map(map => map.data() as DeckofCard);
    })).toPromise();
  }
  async getDeckofCards(id:string):Promise<Card[]>
  {
    return await this.firestore.collection('games').doc<Game>(id).get()
    .pipe(map((game) => 
    {
      if(game.exists)
        return game.data().deck;
      else
        return null;
    })).toPromise();

  }
  sendUserCard(id:string, idUser:string, card:Card[])
  {
    return this.firestore.collection('games').doc<Game>(id).collection('users').
    doc(idUser).update({cardList:firestore.FieldValue.arrayUnion(...card)});

  }
  async sendTableCard(id:string, card:CardTable[])
  {
    return await this.firestore.collection('games').doc<Game>(id).collection('tables').
    doc("one").update({cardList:firestore.FieldValue.arrayUnion(...JSON.parse(JSON.stringify(card)))});

  }
  deleteCardofDeckofCards(id:string, card:Card[])
  {
    return this.firestore.collection('games').doc(id).
    update({deck:firestore.FieldValue.arrayRemove(...card)});

  }
}

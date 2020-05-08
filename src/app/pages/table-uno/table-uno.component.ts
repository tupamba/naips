import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game/game';
import { GameService } from '../../services/game/game.service';
import { AuthService } from '../../services/authentication/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { CardTable } from '../../models/game/cardTable';
import { Card } from '../../models/game/card';
import { TableService } from '../../services/game/table.service';
import { UserGameService } from '../../services/game/usergame.service';
import { CardService } from '../../services/game/card.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../models/authentication/userLogin';
import { Message } from '../../models/game/message';

@Component({
  selector: 'app-table-uno',
  templateUrl: './table-uno.component.html',
  styleUrls: ['./table-uno.component.css']
})
export class TableUnoComponent implements OnInit {
  game:Game;
  tablecards:Observable<CardTable[]>;
  usercards: Observable<any[]>;
  mycards:Observable<Card[]>;
  lastCard:CardTable;
  messageError:string = "No pudimos hacer tu tarea.";
  hiddenError:boolean = false;
  constructor(public gameService:GameService,
    public authService:AuthService,
    public tableService:TableService,
    public userGameService:UserGameService,
    public cardService:CardService,
    private routerService: Router) { }

  ngOnInit(): void {
    this.setErrorMessage("No pudimos hacer tu tarea.", false);
    this.gameService.getGameforUserId(this.authService.getCurrentUser().id).then(
      (result) =>
      {
        if(result && result.length > 0)
        {
         this.game = result[0];
         this.tableService.getTableforGameId(this.game.id).subscribe(
           (result) =>
           {
             if(result && result.length == 1)
             this.lastCard = result[0];
             else  if(result && result.length > 1)
             {
               let r = result.find(x => x.user.name.toUpperCase() != "MUESTRA");
               this.lastCard = r;
             }
           }
         );
         this.mycards = this.tableService.getCardforUserforGameId(this.game.id, this.authService.getCurrentUser().id);
         this.usercards = this.userGameService.getChangeUsersGame(this.game.id, this.authService.getCurrentUser().id);
        }
      });
  }
  async playCard(card:Card)
  {   
    this.playCardprocess([card], this.authService.getCurrentUser());   
  }
  async playCardprocess(card:Card[], user:UserLogin)
  {
    let ctable:CardTable[] = [];
    card.forEach(element => {
      ctable.push(new CardTable(element, user));
    });
    let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
    let deleteCard =  this.userGameService.deleteCardofUser(this.game.id, this.authService.getCurrentUser().id,
    card);
    await sendtCard.then(() => 
    deleteCard.then());
  }
  async dealCards(data)
  {
    let index = 0;
    if(!data.countCardUsers || data.countCardUsers == 0)
    {
      this.setErrorMessage("Tenes que ingresar la cantidad de cartas a repartir.", true);
      return;
    }
    this.hiddenError = true;;
    let deck = await this.cardService.getDeckofCards(this.game.id);
    let users = await this.userGameService.getUsersGame(this.game.id);
    if(users == null || users.length == 0)
      this.setErrorMessage("No tenes a quien repartir cartas.", true);
    else if(!users || deck.length <  this.getNecesaryCard(data.countCardUsers, users.length))
      this.setErrorMessage("No te quedan suficientes cartas en el maso para repartir.", true);
    else
    {
      users.forEach(user => {
          let card = deck.slice(index, index + data.countCardUsers);   
          this.cardService.sendUserCard(this.game.id, user.user.id, card).then();
          this.cardService.deleteCardofDeckofCards(this.game.id,card).then();
          index = index + data.countCardUsers;
        });
      if(data.PutSample)
      {
        let count = !data.countCardTable || data.countCardTable == 0?1:data.countCardTable;
        let cards = deck.slice(index, index + count);  
        this.putSampleprocess(cards, new UserLogin("","Muestra"));
      }
    }
  }
  async takeCards(data)
  {
    if(!data|| data == 0)
    {
      this.setErrorMessage("Tenes que ingresar la cantidad de cartas a robar.", true);
      return;
    }
    this.hiddenError = true;;
    let deck = await this.cardService.getDeckofCards(this.game.id);
    if(deck.length <  data)
    {
      this.setErrorMessage("No te quedan suficientes cartas en el maso para robar.", true);
      return;
    }
    let card = deck.slice(0, data);   
    this.cardService.sendUserCard(this.game.id, this.authService.getCurrentUser().id, card).then();
    this.cardService.deleteCardofDeckofCards(this.game.id,card).then();
  }
  async putSampleprocess(card:Card[], user:UserLogin)
  {
    let ctable:CardTable[] = [];
    card.forEach(element => {
      ctable.push(new CardTable(element, user));
    });
    let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
    let deleteCard =  this.cardService.deleteCardofDeckofCards(this.game.id,card).then();
    await sendtCard.then(() => 
    deleteCard.then());
  }
  async resetCards()
  {
    this.lastCard = null;
    this.setErrorMessage("No pudimos hacer tu tarea.", false)
    await this.tableService.resetCardsinTable(this.game.id);
    let users = await this.userGameService.getUsersGame(this.game.id);
    users.forEach(user => {
         this.userGameService.resetCardsforUser(this.game.id,user.user.id).then();
         this.userGameService.resetSignsforUser(this.game.id,user.user.id).then();
      });
    this.gameService.resetCardList(this.game.id).then();
  }
  async endGame()
  {
    this.lastCard = null;
    this.setErrorMessage("No pudimos hacer tu tarea.", false)
    this.hiddenError = true;

    let users = await this.userGameService.getUsersGame(this.authService.getCurrentUser().id);
    if(users)
    users.forEach(element => {
      this.userGameService.deleteUserforGame(this.authService.getCurrentUser().id, element.user.id).then();
    });
    await this.gameService.deleteGame(this.authService.getCurrentUser().id);
    this.routerService.navigate(['newGame']);
  }
  async outGame()
  {
    await this.userGameService.deleteUserforGame(this.game.id,this.authService.getCurrentUser().id);
    this.routerService.navigate(['newGame']);
  }
  async unDo()
  {
    this.cardService.sendUserCard(this.game.id, this.lastCard.user.id, [this.lastCard.card]).then();
    this.tableService.deleteCardinTable(this.game.id, [this.lastCard]).then();
  }
  getNecesaryCard(countCardforUser, usersLength)
  {
     return (countCardforUser * usersLength);
  }
  setErrorMessage(message:string, show:boolean)
  {  
       this.hiddenError = !show;
       this.messageError = message;
  }
}

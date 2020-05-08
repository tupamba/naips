import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Game } from '../../models/game/game';
import { Observable } from 'rxjs/internal/Observable';
import { TableService } from '../../services/game/table.service';
import { AuthService } from '../../services/authentication/auth.service';
import { Card } from '../../models/game/card';
import { CardService } from '../../services/game/card.service';
import { GameService } from '../../services/game/game.service';
import { UserGameService } from '../../services/game/usergame.service';
import { CardTable } from '../../models/game/cardTable';
import { SignUser } from '../../models/game/sign';
import { UserLogin } from '../../models/authentication/userLogin';
import { ChatService } from '../../services/game/chat.service';
import { Message } from '../../models/game/message';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  textChatButton:string="Ver chat";
  hiddenError:boolean = false;
  game:Game;
  mycards:Observable<Card[]>;
  tablecards:Observable<any>;
  usercards: Observable<any[]>;
  userSings: Observable<SignUser[]>;
  messageError:string = "No pudimos hacer tu tarea.";
  userIdSendSign:string;
  newMessage:boolean = false;
  chatMessages:Message[];
  constructor(public router: ActivatedRoute,
    public cardService:CardService,
    public tableService:TableService,
    public authService:AuthService,
    public gameService:GameService,
    public userGameService:UserGameService,
    private routerService: Router,
    private chatService:ChatService) { }

  ngOnInit(): void {
    this.setErrorMessage("No pudimos hacer tu tarea.", false);
    this.gameService.getGameforUserId(this.authService.getCurrentUser().id).then(
      (result) =>
      {
        if(result && result.length > 0)
        {
         this.game = result[0];
         this.tablecards = this.tableService.getTableforGameId(this.game.id);
         this.mycards = this.tableService.getCardforUserforGameId(this.game.id, this.authService.getCurrentUser().id);
         this.usercards = this.userGameService.getChangeUsersGame(this.game.id, this.authService.getCurrentUser().id);
         this.userSings = this.userGameService.getSignforUsersGame(this.game.id, this.authService.getCurrentUser().id);
         this.chatService.getChatforGameId(this.game.id).subscribe((result) =>
         {
            if(result && result.length > 0 && this.textChatButton == "Ver chat")
               this.newMessage = true;
             this.chatMessages = result;
         });
        }
      });
    
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
        this.putSampleprocess(cards, new UserLogin("", "Muestra"));
      }
    }
  }
  async playCard(card:Card)
  {   
    this.playCardprocess([card], this.authService.getCurrentUser());   
  }
  async playCardprocess(card:Card[], userName:UserLogin)
  {
    let ctable:CardTable[] = [];
    card.forEach(element => {
      ctable.push(new CardTable(element, userName));
    });
    let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
    let deleteCard =  this.userGameService.deleteCardofUser(this.game.id, this.authService.getCurrentUser().id,
    card);
    await sendtCard.then(() => 
    deleteCard.then());
    // .catch((error) =>  this.setErrorMessage("No pudimos hacer tu tarea.", true)))
    // .catch((error) => this.setErrorMessage("No pudimos hacer tu tarea.", true));
  }
  async putSampleprocess(card:Card[], userName:UserLogin)
  {
    let ctable:CardTable[] = [];
    card.forEach(element => {
      ctable.push(new CardTable(element, userName));
    });
    let sendtCard = this.cardService.sendTableCard(this.game.id, ctable);
    let deleteCard =  this.cardService.deleteCardofDeckofCards(this.game.id,card).then();
    await sendtCard.then(() => 
    deleteCard.then());
    // .catch((error) =>  this.setErrorMessage("No pudimos hacer tu tarea.", true)))
    // .catch((error) => this.setErrorMessage("No pudimos hacer tu tarea.", true));
  }
  async resetCards()
  {
    this.setErrorMessage("No pudimos hacer tu tarea.", false)
    await this.tableService.resetCardsinTable(this.game.id);
    let users = await this.userGameService.getUsersGame(this.game.id);
    users.forEach(user => {
         this.userGameService.resetCardsforUser(this.game.id,user.user.id).then();
         this.userGameService.resetSignsforUser(this.game.id,user.user.id).then();
         this.chatService.resetChatinTable(this.game.id).then();
      });
    this.gameService.resetCardList(this.game.id).then();
  }
  async endGame()
  {
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
  getLastCard(cards:CardTable[])
  {
    let response = "";
    if(cards && cards.length > 0)
    {
      let c = cards.filter(x => x.user.name.toUpperCase() != "MUESTRA");
      if(c && c.length > 0)
        response =  c[0].card.number + " " +  c[0].card.type + " - " +  c[0].user.name;
    }
    return response;
  }
  selectSign(signs)
  {
    if(!signs)
     return;
    let sings = [];
    signs.forEach(element => {
      sings.push(new SignUser(this.authService.getCurrentUser(),element.text));   
      });
    this.userGameService.sendSignforUsersGame(this.game.id,sings ,this.userIdSendSign).then();
  }
  sendChat(message:string)
  {
    let m = new Message(this.authService.getCurrentUser(),message);
      this.chatService.sendMessage(this.game.id, m).then();
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
 expandClick()
 {
   if(this.textChatButton == "Ver chat")
   {
     this.textChatButton = "Ocultar chat";
     this.newMessage = false;
   }
   else
     this.textChatButton = "Ver chat";
 }

}

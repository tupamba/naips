import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { GameService } from '../../services/game/game.service';
import { AuthService } from '../../services/authentication/auth.service';
import { Router } from '@angular/router';
import { Game } from '../../models/game/game';
import { CardService } from '../../services/game/card.service';
import { DeckofCard } from '../../models/game/deckofCard';
import { UserGameService } from '../../services/game/usergame.service';
import { User } from '../../models/game/user';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  deckCards:DeckofCard[];
  userSearch:string;
  nameNewGame:string;
  nameJoinGame:string;
  messageError:string = "No pudimos hacer tu tarea.";
  hiddenError:boolean = true;
  typeDeck:number = 1;
  constructor(public userService: UserService,
    public gameService:GameService,
    public auth:AuthService,
    public cardService:CardService,
    public userGameService: UserGameService,
    private navigation:NavigationService) { }

  ngOnInit(): void {
    this.cardService.getListDeckofCardsAsync().then((decks) =>
    {
        this.deckCards = decks;
    });
  }
  async joinGame()
  {
    this.hiddenError = true;
    if(this.nameJoinGame == null || this.nameJoinGame == "")
      return;
    let games = await this.gameService.getGame(this.nameJoinGame);
    if(games == null || games.length == 0)
     this.setErrorMessage("No tenemos ninguna partida en curso.",true);
    else if(games.find(x => x.owner.user.id ==  this.auth.getCurrentUser().id))
      this.setErrorMessage("Ya sos parte de esta partida, es mas sos el creador.",true);
    else
    {
      let game = games[0];
      let cuser = this.auth.getCurrentUser();
      let user = new User(cuser.id, cuser.name);
      await this.gameService.addUsertoGame(game.id, user);
      this.navigation.navigateTable(game.type)
    }       
  }
  async createGame()
  {
    this.hiddenError = true;
    if(this.nameNewGame == null || this.nameNewGame == "")
      return;
    let games = await this.gameService.getGame(this.nameNewGame);
    if(games != null && games.length > 0 && games[0].id != this.auth.getCurrentUser().id)
      this.setErrorMessage("Este nombre de partida ya esta en uso.",true);
    else
    {

        let users = await this.userGameService.getUsersGame(this.auth.getCurrentUser().id);
        if(users)
          users.forEach(element => {
            this.userGameService.deleteUserforGame(this.auth.getCurrentUser().id, element.user.id).then();
          });
        await this.gameService.deleteGame(this.auth.getCurrentUser().id);

      let game = this.getNewGame();
      await this.gameService.createNewGame(game);
      this.navigation.navigateTable(game.type)
      }
  }
  private getNewGame()
  {
    let cuser = this.auth.getCurrentUser();
    let user = new User(cuser.id, cuser.name);
    var response = new Game(this.nameNewGame, user, this.getCards(this.typeDeck).cardList);
    response.type = this.typeDeck;
    response.users = [this.auth.getCurrentUser().id];
    return response;
  }
  private getCards(typeDeck:number):DeckofCard
  {
    let deck = this.deckCards.find(x => x.type == typeDeck);
    deck.cardList = this.shuffle(deck.cardList);
    return deck;
  }

 setErrorMessage(message:string, show:boolean)
 {  
      this.hiddenError = !show;
      this.messageError = message;
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

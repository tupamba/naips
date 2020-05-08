
import { Card } from './card';
import { DeckofCard } from './deckofCard';
import { User } from './user';

export class Game
{
    constructor(gname:string, gowner:User,gcards:Card[])
    {
        this.name = gname;
        this.owner = gowner;
        this.deck = gcards;
        this.originalDeck = gcards;
        this.id = gowner.user.id;
    }
    public id: string;
    public name:string;
    public owner:User;
    public originalDeck:Card[];
    public deck:Card[];
    public users:string[] = [];
    public table:Card[];
    public type:number;
}

import { User } from '../../../models/game/user';
import { Card } from '../../../models/game/card';
export class GameModel
{
    constructor(gname:string, gowner:User, gdeck:Card[], gtype:number)
    {
        this.name = gname;
        this.owner = gowner;
        this.deck = gdeck;
        this.originalDeck = gdeck;
        this.type = gtype;
    }
    public id: string;
    public name:string;
    public owner:User;
    public deck:Card[];
    public originalDeck:Card[];
    public users:string[] = [];
    public type:number;
}

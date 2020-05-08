import { Card } from './card';
import { User } from './user';
export class Player
{
    constructor(puser:User, pcards:Card[])
    {
        this.user = puser;
        this.cards = pcards;
    }
    public user:User;
    public cards:Card[];
}
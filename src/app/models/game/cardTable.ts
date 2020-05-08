import { Card } from './card';
import { UserLogin } from '../authentication/userLogin';

export class CardTable
{
    constructor(ccard:Card, cuser:UserLogin)
    {
        this.card = ccard;
        this.user = cuser;
    }
    public card:Card;
    public user:UserLogin;
    public current:boolean;
}
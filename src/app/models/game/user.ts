import { Card } from '../game/card';
import { UserLogin } from '../authentication/userLogin';
import { SignUser } from './sign';
export class User
{
    constructor(idx:string, displayName:string)
    {
        this.user = new UserLogin(idx,displayName);
    }
    public user: UserLogin;
    public cardList:Card[];
    public signs: SignUser[];
}
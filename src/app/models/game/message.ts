import { UserLogin } from '../authentication/userLogin';
export class Message
{
    constructor(suser:UserLogin, stext:string)
    {
        this.user = suser;
        this.text = stext;
    }
    public id:string;
    public text: string;
    public user: UserLogin;
}
import { UserLogin } from '../authentication/userLogin';
export class SignUser
{
    constructor(suser:UserLogin, stext:string)
    {
        this.user = suser;
        this.text = stext;
    }
    public text: string;
    public user: UserLogin;
}
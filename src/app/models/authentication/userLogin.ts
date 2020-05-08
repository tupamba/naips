import { Card } from '../game/card';
export class UserLogin
{
    constructor(idx:string, displayName:string)
    {
        this.id = idx;
        this.name = displayName;
    }
    public id: string;
    public name:string;
}
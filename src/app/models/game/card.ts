
export class Card
{
    constructor(cnumber:number, ctype:string)
    {
        this.number = cnumber;
        this.type = ctype;
    }
    public number:number;
    public type:string;
    public id:string;
    public imagePath:string;
    public text:string;
}
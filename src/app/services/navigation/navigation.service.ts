import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor( private routerService: Router) { }
  navigateTable(deckType:number, param:any = null)
  {
    if(deckType == 1 && param)
      this.routerService.navigate(['table'],{ queryParams: { gameData: param } });
    else  if(deckType == 1)
      this.routerService.navigate(['table']);
    else  if(deckType == 2 && param)
      this.routerService.navigate(['tableUno'],{ queryParams: { gameData: param } });
    else  if(deckType == 2)
      this.routerService.navigate(['tableUno']);
  }
}

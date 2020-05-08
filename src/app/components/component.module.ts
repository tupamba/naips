
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from './search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { CardViewComponent } from './card-view/card-view.component';
import { DealCardsComponent } from './deal-cards/deal-cards.component';
import { CardViewTableComponent } from './card-view-table/card-view-table.component';
import { DeackofCardsComponent } from './deackof-cards/deackof-cards.component';
import { SelectSignsComponent } from './select-signs/select-signs.component';
import { TakeaCardComponent } from './takea-card/takea-card.component';
import { CardUnoViewComponent } from './card-uno-view/card-uno-view.component';
import { CardUnoViewTableComponent } from './card-uno-view-table/card-uno-view-table.component';
import { ChatViewComponent } from './chat-view/chat-view.component';



@NgModule({
  declarations: [
    SearchUserComponent,
    CardViewComponent,
    DealCardsComponent,
    CardViewTableComponent,
    DeackofCardsComponent,
    SelectSignsComponent,
    TakeaCardComponent,
    CardUnoViewComponent,
    CardUnoViewTableComponent,
    ChatViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchUserComponent,
    CardViewComponent,
    DealCardsComponent,
    CardViewTableComponent,
    SelectSignsComponent,
    TakeaCardComponent,
    CardUnoViewComponent,
    CardUnoViewTableComponent,
    ChatViewComponent
  ]
})
export class ComponentModule { }
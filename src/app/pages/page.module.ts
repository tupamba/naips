import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CreateGameComponent } from './create-game/create-game.component';
import { ComponentModule } from '../components/component.module';
import { JoinGameComponent } from './join-game/join-game.component';
import { TableUnoComponent } from './table-uno/table-uno.component';




@NgModule({
  declarations: [
    MenuComponent,
    TableComponent,
    LoginComponent,
    CreateGameComponent,
    JoinGameComponent,
    TableUnoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule
  ]
})
export class PageModule { }

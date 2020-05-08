import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { TableComponent } from './pages/table/table.component';
import { CreateGameComponent } from './pages/create-game/create-game.component';
import { TableUnoComponent } from './pages/table-uno/table-uno.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent},
  { path: 'table', component: TableComponent , canActivate: [AuthGuardService]},
  { path: 'tableUno', component: TableUnoComponent , canActivate: [AuthGuardService]},
  { path: 'menu', component: MenuComponent , canActivate: [AuthGuardService]},
  { path: 'newGame', component: CreateGameComponent , canActivate: [AuthGuardService]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

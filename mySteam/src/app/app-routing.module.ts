import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInComponent } from './log-in/log-in.component';
import { LibraryComponent } from './library/library.component';
import { GamesComponent } from './games/games.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {path: 'home', component: AppComponent}, 
  {path: 'profile', component: ProfileComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'games', component: GamesComponent},
  {path: 'friends', component: FriendsComponent}, 
  {path: '**', component: LogInComponent},
  {
    path: '', 
    redirectTo: '/profile', 
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

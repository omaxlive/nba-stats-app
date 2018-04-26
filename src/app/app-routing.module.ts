import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/stats/players-list/players-list.component';
import { DetailComponent } from './components/stats/detail/detail.component';

const appRoutes: Routes = [
  { path: '', component: PlayersListComponent },
  { path: 'detail/:PLAYER_ID', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }

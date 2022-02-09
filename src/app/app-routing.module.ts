import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatsComponent} from "./feature/stats-screen/stats/stats.component";
import {PageNotFoundComponent} from "./feature/page-not-found-screen/page-not-found/page-not-found.component";
import { HomeComponent } from './feature/home-screen/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProfileComponent } from './feature/profile-screen/profile/profile.component';
import { MutantComponent } from './feature/mutant-screen/mutant/mutant.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'mutant', component: MutantComponent, canActivate: [AuthGuard]},
  {path: 'stats', component: StatsComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

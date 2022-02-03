import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatsDetailComponent} from "./feature/stats-screen/stats-detail/stats-detail.component";
import {PageNotFoundComponent} from "./feature/page-not-found-screen/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'stats', component: StatsDetailComponent},
  {path: '', redirectTo: '/stats', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { ArtistListComponent } from './playlist-creation/artist-list/artist-list.component';
import { CriteriaComponent } from './playlist-creation/criteria/criteria.component';
import { FinalizeComponent } from './playlist-creation/finalize/finalize.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { text: 'Home' }},
  { path: 'profile', component: ProfileComponent, data: { text: 'Profile' }},
  { path: 'login', component: LoginComponent, data: { text: 'Login'}},
  { path: 'artists', component: ArtistListComponent, data: { text: 'Artists'}},
  { path: 'criteria', component: CriteriaComponent, data: { text: 'Criteria'}},
  { path: 'callback', component: CallbackComponent, data: { text: 'Callback' }},
  { path: 'finalize', component: FinalizeComponent, data: { text: 'Finalize'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

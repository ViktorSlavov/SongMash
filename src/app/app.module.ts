import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxForOfModule,
   IgxSliderModule, IgxInputGroupModule, IgxProgressBarModule } from 'igniteui-angular';
import { HiveHexagonComponent } from './components/hexagon/hexagon.component';
import { HexagonShapeComponent } from './components/hexagon-shape/hexagon-shape.component';
import { CallbackComponent } from './callback/callback.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistListComponent } from './playlist-creation/artist-list/artist-list.component';
import { CriteriaComponent } from './playlist-creation/criteria/criteria.component';
import { HexAvatarComponent } from './components/hex-avatar/hex-avatar.component';
import { ArtistFilterPipe } from './artist-filter.pipe';
import { FormsModule } from '@angular/forms';
import { FinalizeComponent } from './playlist-creation/finalize/finalize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    HiveHexagonComponent,
    HexagonShapeComponent,
    CallbackComponent,
    ArtistComponent,
    ArtistListComponent,
    CriteriaComponent,
    HexAvatarComponent,
    ArtistFilterPipe,
    FinalizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxIconModule,
    IgxForOfModule,
    IgxSliderModule,
    FormsModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

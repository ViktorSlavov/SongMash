import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { IgxAvatarModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';
import { HiveHexagonDirective } from './components/hexagon/hexagon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    HiveHexagonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

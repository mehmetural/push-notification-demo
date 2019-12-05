import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBpnZoQptvMCywJWuYRDqkYWhzEHo6DcMs',
      authDomain: 'netcore-push-notification-demo.firebaseapp.com',
      databaseURL: 'https://netcore-push-notification-demo.firebaseio.com',
      projectId: 'netcore-push-notification-demo',
      storageBucket: 'netcore-push-notification-demo.appspot.com',
      messagingSenderId: '80809731750',
      appId: '1:80809731750:web:f05a69f6db4c364aa93667'
    }),
    AngularFireMessagingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

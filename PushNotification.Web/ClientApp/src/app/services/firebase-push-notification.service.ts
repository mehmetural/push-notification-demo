import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class FirebasePushNotificationService {

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (messagingContext) => {
        messagingContext.onMessage = messagingContext.onMessage.bind(messagingContext);
        messagingContext.onTokenRefresh = messagingContext.onTokenRefresh.bind(messagingContext);
      }
    );
  }

  requestPermission = () => this.angularFireMessaging.requestToken;

  removeToken = (token: string) => this.angularFireMessaging.deleteToken(token);

  receiveMessage = () => this.angularFireMessaging.messages;
}

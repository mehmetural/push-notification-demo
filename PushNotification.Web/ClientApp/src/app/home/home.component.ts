import { FirebasePushNotificationService } from '../services/firebase-push-notification.service';
import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  error: string;
  messages = [];
  isWaiting = false;

  constructor(private fcmService: FirebasePushNotificationService,
    private notificationService: NotificationService) {
    fcmService.receiveMessage().subscribe(message => this.messages.push(message));
  }

  isRegisteredForPush = () =>
    localStorage.getItem('currentUser') !== null

  registerForPush() {
    this.fcmService.requestPermission()
      .subscribe(
        token => {
          localStorage.setItem('currentUser', token);
          this.notificationService.registerForPush('currentUser', token).subscribe();
        },
        error => {
          this.error = error;
        }
      );
  }

  removeSubscription() {
    const currentToken = localStorage.getItem('currentUser');
    if (currentToken) {
      this.fcmService.removeToken(currentToken).subscribe(
        ok => localStorage.removeItem('currentUser'),
        error => { this.error = error; localStorage.removeItem('currentUser'); }
      );
    }
  }

  sendNotification = (title: string, body: string) =>
    this.notificationService.sendNotification({ title, body }).subscribe()

  sendNotificationWithDelay(title: string, body: string) {
    const newWindow = window.open();
    newWindow.document.write('Wait to see notification');
    setTimeout(() => {
      this.sendNotification(title, body);
    }, 1000);
  }
}

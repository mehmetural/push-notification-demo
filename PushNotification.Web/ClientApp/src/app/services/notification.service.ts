import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  registerForPush = (username: string, token: string) =>
    this.http.post<any>(this.baseUrl + 'pushnotification/register', { username, token })

  sendNotification = (notification: any) =>
    this.http.post(this.baseUrl + 'pushnotification/send', notification)
}

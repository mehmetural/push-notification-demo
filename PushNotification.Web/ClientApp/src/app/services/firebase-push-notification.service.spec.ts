import { TestBed } from '@angular/core/testing';

import { FirebasePushNotificationService } from './firebase-push-notification.service';

describe('FirebasePushNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasePushNotificationService = TestBed.get(FirebasePushNotificationService);
    expect(service).toBeTruthy();
  });
});

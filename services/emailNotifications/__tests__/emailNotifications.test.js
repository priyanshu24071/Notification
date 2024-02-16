// services/emailNotifications/__tests__/emailNotifications.test.js

const EmailNotificationService = require('../emailNotifications');

describe('Email Notification Service', () => {
  let emailService;

  beforeEach(() => {
    emailService = new EmailNotificationService();
  });

  test('Send Email Notification', () => {
    const notification = { to: 'test@example.com', subject: 'Test Email', body: 'This is a test email notification' };
    expect(() => emailService.send(notification)).not.toThrow();
   
  });
});

// notificationService.js
const PushNotificationService = require('./services/pushNotifications/pushNotifications');
const SMSNotificationService = require('./services/smsNotifications/smsNotifications');
const EmailNotificationService = require('./services/emailNotifications/emailNotifications');
class NotificationService {
  constructor() {
    this.pushService = new PushNotificationService();
    this.smsService = new SMSNotificationService();
    this.emailService = new EmailNotificationService();
  }

  send(notification) {
    // Send notification via all channels
    this.pushService.send(notification);
    this.smsService.send(notification);
    this.emailService.send(notification);
  }
}

module.exports = NotificationService;

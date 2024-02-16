// app.js
const NotificationService = require('./notificationService');


const notification = {
  title: 'New Message',
  message: 'You have a new message!!'
};


const notifier = new NotificationService();

// Send notification
notifier.send(notification);

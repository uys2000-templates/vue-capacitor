import { PushNotifications } from "@capacitor/push-notifications";

export const regiserForNotification = function () {
  return PushNotifications.register();
};
export const checkNotificationPermissions = function () {
  return PushNotifications.checkPermissions().then(({ receive }) => receive);
};
export const requestNotificationPermissions = function () {
  return PushNotifications.requestPermissions().then(({ receive }) => receive);
};

export const getDeliveredNotifications = function () {
  return PushNotifications.getDeliveredNotifications().then(
    ({ notifications }) => notifications
  );
};
export const removeDeliveredNotifications = function (notifications) {
  return PushNotifications.removeDeliveredNotifications({
    notifications: notifications,
  });
};
export const reoveAllDeliveredNotifications = function () {
  return PushNotifications.removeAllDeliveredNotifications();
};

export const createNotificationChannel = function (channel) {
  return PushNotifications.createChannel({ channel: channel });
};
export const deleteNotificationChannel = function (id) {
  return PushNotifications.deleteChannel({ id: id });
};
export const listNotificationChannels = function () {
  return PushNotifications.listChannels().then(({ channels }) => channels);
};

export const notificationRegistrationListener = function (
  callback = (args) => console.log(args)
) {
  // run callback({ token })
  return PushNotifications.addListener("registration", callback);
};
export const notificationRegistrationErrorListener = function (
  callback = (args) => console.log(args)
) {
  // run callback({ error })
  return PushNotifications.addListener("registrationError", callback);
};
export const notificationPushReceivedListener = function (
  callback = (args) => console.log(args)
) {
  // run callback({ title, subtitle, body, id, tag, badge, notification,
  //                data, click_action, link, group, groupSummary  })

  return PushNotifications.addListener("pushNotificationReceived", callback);
};
export const notificationPushActionPerformedListener = function (
  callback = (args) => console.log(args)
) {
  // run callback({ actionId, inputValue, notification })
  return PushNotifications.addListener(
    "pushNotificationActionPerformed",
    callback
  );
};
export const removeAllNotificationListeners = function () {
  return PushNotifications.removeAllListeners();
};

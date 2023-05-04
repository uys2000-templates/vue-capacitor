import { LocalNotifications } from "@capacitor/local-notifications";

export const scheduleNotifications = function (notifications) {
  //return [ id ]
  return LocalNotifications.schedule({
    options: { notifications: notifications },
  }).then(({ notifications }) => notifications);
};
export const getPendingNotifications = function () {
  // return { title, body, id, schedule, extra }
  return LocalNotifications.getPending().then(
    ({ notifications }) => notifications
  );
};
export const registerNotificationActionTypes = function (
  RegisterActionTypesOptions
) {
  return LocalNotifications.registerActionTypes({
    options: RegisterActionTypesOptions,
  });
};
export const cancelNotification = function (notificationIds) {
  return LocalNotifications.cancel({
    options: { notifications: notificationIds },
  });
};
export const getDeliveredNotifications = function () {
  // return { id, tag, title, body, group, groupSummary, data
  //        extra, attachments, actionTypeId, schedule, sound }
  return LocalNotifications.getDeliveredNotifications().then(
    ({ notifications }) => notifications
  );
};
export const removeDeliveredNotifications = function (notificationIds) {
  return LocalNotifications.removeDeliveredNotifications({
    delivered: { notifications: notificationIds },
  });
};
export const removeAllDeliveredNotifications = function () {
  return LocalNotifications.removeAllDeliveredNotifications();
};

export const createNotificationChannel = function (channel) {
  return LocalNotifications.createChannel({ channel: channel });
};
export const deleteNotificationChannel = function (id) {
  return LocalNotifications.deleteChannel({ id: id });
};
export const listNotificationChannels = function () {
  return LocalNotifications.listChannels().then(({ channels }) => channels);
};

export const checkNotificationPermissions = function () {
  return LocalNotifications.checkPermissions().then(({ display }) => display);
};
export const requestNotificationPermissions = function () {
  return LocalNotifications.requestPermissions().then(({ display }) => display);
};

export const localNotificationReceivedListener = function (
  callback = (args) => console.log(args)
) {
  return LocalNotifications.addListener("localNotificationReceived", callback);
};

export const localNotificationActionPerformedListener = function (
  callback = (args) => console.log(args)
) {
  return LocalNotifications.addListener(
    "addListener('localNotificationActionPerformed",
    callback
  );
};
export const removeAllNotificationListeners = function () {
  return LocalNotifications.removeAllListeners();
};

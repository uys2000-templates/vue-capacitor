import { App } from "@capacitor/app";

export const getAppInfo = function () {
  //returns { name, id, build, version }
  return App.getInfo();
};
export const getAppState = function () {
  //returns { isActive }
  return App.getState();
};
export const getAppLaunchUrl = function () {
  // returns { url }
  return App.getLaunchUrl();
};

export const exitApp = function () {
  return App.exitApp();
};
export const minimizeApp = function () {
  return App.minimizeApp();
};

export const appStateChangeListener = function (callback) {
  return App.addListener("appStateChange", ({ state: { isActive } }) =>
    callback(isActive)
  );
};
export const appPauseListener = function (callback) {
  return App.addListener("pause", callback);
};
export const appResumeListener = function (callback) {
  return App.addListener("resume", callback);
};
export const appOpenUrlListener = function (callback) {
  // event = { url, iosSourceApplication, iosOpenInPlace }
  return App.addListener("openUrl", ({ event }) => callback(event));
};
export const appRestoredResultListener = function (callback) {
  // event = { pluginId, methodName, data, success, error { message } }
  return App.addListener("restoredResult", ({ event }) => callback(event));
};
export const appBackButtonListener = function (callback) {
  // canGoBack = { canGoBack }
  return App.addListener("backButton", ({ event }) => callback(event));
};

export const appRemoveListeners = function () {
  return App.removeAllListeners();
};

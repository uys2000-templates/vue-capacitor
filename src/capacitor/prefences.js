import { Preferences } from "@capacitor/preferences";

export const configureLocalStore = function (group) {
  return Preferences.configure({ group });
};
export const getLocalObject = function (key) {
  return Preferences.get({ key }).then(({ value }) => JSON.parse(value));
};
export const setLocalObject = function (key, value) {
  return Preferences.set({ key, value: JSON.stringify(value) });
};
export const removeLocalObject = function (key) {
  return Preferences.remove({ key });
};
export const clearLocalStore = function () {
  return Preferences.clear();
};
export const getLocalStoreKeys = function () {
  return Preferences.keys().then(({ keys }) => keys);
};

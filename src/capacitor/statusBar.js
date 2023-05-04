import { StatusBar, Style } from "@capacitor/status-bar";

export const statusBar = StatusBar;

//style = default | light | dark
export const setStatusBarStyle = function (style) {
  return statusBar.setStyle(Style[style]);
};
export const setStatusBarBackgroundColor = function (color) {
  return statusBar.setBackgroundColor(color);
};
//animation = none | slide | fade
export const showStatusBar = function (animation) {
  return statusBar.show({
    animation: animation,
  });
};
//animation = none | slide | fade
export const hideStatusBar = function (animation) {
  return statusBar.hide({
    animation: animation,
  });
};
export const getStatusBarInfo = function () {
  // return { visible, style, color, overlays }
  return statusBar.getInfo();
};
//animation = true | false
export const setStatusBarOverlays = function (isOverlays) {
  return statusBar.setOverlaysWebView({ overlay: isOverlays });
};

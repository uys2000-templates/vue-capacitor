import { Network } from "@capacitor/network";

export const getNetworkStatus = function () {
  // returns { connected, connectionType }
  return Network.getStatus();
};

export const networkStatusChangeListener = function (callback) {
  // status = { connected, connectionType }
  return Network.addListener("networkStatusChange", ({ status }) =>
    callback(status)
  );
};
export const removeNetworkListeners = function () {
  return Network.removeAllListeners();
};

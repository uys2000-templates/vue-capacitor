import { CapacitorHttp } from "@capacitor/core";

export const httpGet = function (url, header, data, params) {
  //returns { url, status, data, headers }
  return CapacitorHttp.get({ url, header, data, params });
};

export const httpPost = function (url, header, data, params) {
  //returns { url, status, data, headers }
  return CapacitorHttp.post({ url, header, data, params });
};

export const httpPut = function (url, header, data, params) {
  //returns { url, status, data, headers }
  return CapacitorHttp.put({ url, header, data, params });
};
export const httpPatch = function (url, header, data, params) {
  //returns { url, status, data, headers }
  return CapacitorHttp.patch({ url, header, data, params });
};

export const httpDelete = function (url, header, data, params) {
  //returns { url, status, data, headers }
  return CapacitorHttp.delete({ url, header, data, params });
};

export const httpRequest = function (
  url,
  method,
  params,
  data,
  headers,
  readTimeout,
  connectTimeout,
  disableRedirects,
  webFetchExtra,
  responseType,
  shouldEncodeUrlParams
) {
  //returns { url, status, data, headers }
  return CapacitorHttp.request({
    url,
    method,
    params,
    data,
    headers,
    readTimeout,
    connectTimeout,
    disableRedirects,
    webFetchExtra,
    responseType,
    shouldEncodeUrlParams,
  });
};

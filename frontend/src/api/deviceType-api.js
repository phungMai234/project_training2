//src/api/deviceType-api.js
import {sendGetRequestWithoutToken} from "./api-sender";

export function getTypes() {

  let route = '/request/device_summary';
  return sendGetRequestWithoutToken(route);
}
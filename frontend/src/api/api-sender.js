import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

function handleResult(res) {
  return res.data;
}
function handleError(error) {
  console.log(error);
}
export function sendGetRequestWithoutToken(route) {
  let route_api = `${BASE_URL}${route}`;
  return axios.get(route_api).then(handleResult).catch(handleError)
}
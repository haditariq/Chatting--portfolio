const URLS = 0
  ? "https://chatting-api-portfilio.herokuapp.com/api/ https://chatting-api-portfilio.herokuapp.com/"
  : "http://localhost:5000/api/ http://localhost:5000/";

export default {
  API_URL: URLS.split(" ")[0],
  SOCKET_URL: URLS.split(" ")[1]
};

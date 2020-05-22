import axios from "axios";

const instance = axios.create({
  //Replace the URL with your server URL
  baseURL: "https://react-my-burger-e3301.firebaseio.com/",
});
export default instance;

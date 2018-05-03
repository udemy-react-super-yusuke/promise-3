import axios from "axios";

const url = "https://api.myjson.com/bins/159wqn";

axios.get(url).then(res => {
  console.log(res.data);
});

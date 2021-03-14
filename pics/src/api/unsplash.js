import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tUByBHtR4t5w_KVVTNtWHsft60l3xpI7uV8c2ULvFnU",
  },
});

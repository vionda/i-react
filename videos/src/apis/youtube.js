import axios from "axios";

const KEY = "AIzaSyCuMjcgfabmQIyI85CsX0LKOmmDpxExf5g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

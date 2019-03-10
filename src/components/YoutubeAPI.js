import axios from "axios";

const KEY = null; //provide your API key

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: "5",
    part: "snippet",
    type: "video",
    key: KEY
  }
});

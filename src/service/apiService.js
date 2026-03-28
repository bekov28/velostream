import axios from "axios";

const baseURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

export const ApiService = {
  async fetchRequest(url) {
    try {
      const response = await axios.get(`${baseURL}/${url}`, options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

import axios from 'axios';

// const URI = "http://localhost:8000/events/";
const URI = "https://music-live-2021.herokuapp.com/events/";

export const fetch = async () => {
  const response = await axios.get(URI);
  return response.data;
}

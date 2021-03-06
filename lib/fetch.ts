import axios from 'axios';

const URI = "http://localhost:8000/events/";

export const fetch = async () => {
  const response = await axios.get(URI);
  return response.data;
}

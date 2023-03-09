import axios from 'axios';

export const coinGeckoApi = axios.create({
  baseURL: process.env.REACT_APP_COIN_API_URL,
});

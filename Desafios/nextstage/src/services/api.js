// Base da URL: https://api.rawg.io/api
// URL da API: /games?key=2b081d046b334f76b1cf7b4b01845c4b&page_size=10&languages=pt&ordering=-released
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export default api;

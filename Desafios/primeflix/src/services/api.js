// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=e41d651f9fc642229cd44ae081e4b305&language=pt-br
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;

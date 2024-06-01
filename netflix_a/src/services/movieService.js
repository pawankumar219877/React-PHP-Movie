import { ajax } from 'rxjs/ajax';
const BASE_URL = 'http://localhost/netflix/';
export const fetchMovies = () => {
  return ajax.getJSON(`${BASE_URL}/movies.php`);
};
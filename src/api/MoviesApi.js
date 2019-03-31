import axios from 'axios';

class MoviesApi {

    /**
     * Search movies from list
     * @returns {SearchResult}
     */

    static searchMovie(search) {

        return axios.get('http://www.omdbapi.com/?s='+search+'&apikey=9813bbea')
            .then(function (response) {
                return response.data.Search;
            })
            .catch(function (error) {
                return error
            });

    }
}


export default MoviesApi;

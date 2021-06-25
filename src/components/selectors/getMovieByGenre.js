import {movies} from '../../data/movies';

export const getMovieByGenre = (genre)=>{
    const validGenres = ['Gangsters', 'War'];
    if(!validGenres.includes(genre)){
        throw new Error(`Genre "${genre}" no encontrado`);
    }
    return movies.filter(movie => movie.Genre === genre);
}
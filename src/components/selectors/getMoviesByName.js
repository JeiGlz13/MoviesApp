import { movies } from "../../data/movies"

export const getMoviesByName = (name = '') =>{
    if(name === ''){
        return [];
    }
    name = name.toLowerCase();
    return movies.filter(movie => movie.name.toLowerCase().includes(name));
}
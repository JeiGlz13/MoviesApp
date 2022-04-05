import React, { useMemo } from 'react';
import { getMovieByGenre } from '../selectors/getMovieByGenre';
import { MovieCard } from './MovieCard';

export const MoviesList = ({genre}) => {

    const movies =useMemo(() => getMovieByGenre(genre ), [genre])
    

    return (
        <div className = "animate__animated animate__fadeIn w-full flex flex-row flex-wrap justify-around mb-16" >
            {
                movies.map(movie =>(
                    <MovieCard key = {movie.id}
                    {...movie} />
                  
                ))
            } 
        </div>
    )
}

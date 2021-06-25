import React, { useMemo } from 'react';
import { getMovieByGenre } from '../selectors/getMovieByGenre';
import { MovieCard } from './MovieCard';

export const MoviesList = ({genre}) => {

    const movies =useMemo(() => getMovieByGenre(genre ), [genre])
    

    return (
        <div className = "card animate__animated animate__fadeIn" style = {{display: "flex",
         flexDirection: "row",
         flexWrap: "wrap"}}>
            {
                movies.map(movie =>(
                    <MovieCard key = {movie.id}
                    {...movie} />
                  
                ))
            } 
        </div>
    )
}

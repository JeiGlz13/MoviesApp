import React from 'react';
import {MoviesList} from '../movies/MoviesList'

export const WarScreen = () => {
    const genreWar = 'War';

    return (
        <div>
            <h1>War Screen</h1>
            <hr/>

            <MoviesList genre = {genreWar}/>
        </div>
    )
}

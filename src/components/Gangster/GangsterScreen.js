import React from 'react';
import {MoviesList} from '../movies/MoviesList';

export const GangsterScreen = () => {
    const genreGangsters = 'Gangsters';

    return (
        <div>
            <h1>Gangsters Screen</h1>
            <hr/>

            <MoviesList genre = {genreGangsters}/>
        </div>
    )
}

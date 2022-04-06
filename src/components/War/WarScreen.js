import React from 'react';
import {MoviesList} from '../movies/MoviesList'
import { Titles } from '../UI/Titles';

export const WarScreen = () => {
    const genreWar = 'War';

    return (
        <div className='px-10' >
            <Titles subtitle="War" />
            <MoviesList genre = {genreWar}/>
        </div>
    )
}

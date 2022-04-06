import React from 'react';
import {MoviesList} from '../movies/MoviesList';
import { Titles } from '../UI/Titles';

export const GangsterScreen = () => {
    const genreGangsters = 'Gangsters';

    return (
        <div className='px-10'>
            <Titles subtitle="Gangsters" />

            <MoviesList genre = {genreGangsters}/>
        </div>
    )
}

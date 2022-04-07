import React, {useEffect} from 'react';
import {MoviesList} from '../movies/MoviesList'
import { Titles } from '../UI/Titles';

export const WarScreen = () => {
    const genreWar = 'War';

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <div className='px-10' >
            <Titles subtitle="War" />
            <MoviesList genre = {genreWar}/>
        </div>
    )
}

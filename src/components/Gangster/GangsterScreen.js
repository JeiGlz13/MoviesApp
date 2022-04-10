import React, {useEffect} from 'react';
import {MoviesList} from '../movies/MoviesList';
import { Titles } from '../UI/Titles';

export const GangsterScreen = () => {
    const genreGangsters = 'Gangsters';

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <div className='px-0 xs:px-4 xl:px-8'>
            <Titles subtitle="Gangsters" />

            <MoviesList genre = {genreGangsters}/>
        </div>
    )
}

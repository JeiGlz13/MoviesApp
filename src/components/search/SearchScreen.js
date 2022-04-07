import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { MovieCard } from '../movies/MovieCard';
import { getMoviesByName } from '../selectors/getMoviesByName';
import { Titles } from '../UI/Titles';

import searchMovieIcon from '../../assets/SearchMovie.webp';
import notFound from '../../assets/NotFound.png';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);
    const initialForm = {
        //name del input
        searchText: q
    }
    const [formValues, handleInputChange] = useForm(initialForm);
    
    const {searchText} = formValues;

    const moviesFiltered = useMemo(() => 
         getMoviesByName(q), [q]);
    
    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div className='w-full px-10'>
            <Titles title='Buscar Pelicula' />

            <div className = "flex flex-row mt-3" >
                <div className = "w-full" >
                    <h4 className='text-sky-600 text-3xl font-extrabold mb-4' >Search Form</h4>

                    <div className='flex flex-row justify-center items-center mt-6' >
                        <form onSubmit = {handleSearch}
                         className="relative text-gray-700 w-96 ">
                            <input type="search"
                            name = "searchText"
                            value = {searchText}
                            onChange = {handleInputChange}
                            autoComplete = "off"
                            placeholder="Search"
                            className="bg-gray-100 w-full h-12 px-7 pr-12 rounded-full 
                            text-lg focus:outline-none cardShadow"/>
                        
                            <button type="submit" className="absolute right-0 top-0 mt-[0.65rem] mr-5">
                                <i className="fa-solid fa-magnifying-glass text-lg"></i>
                            </button>
                        </form>
                    </div>
                    
                </div>

                <div className = "w-full justify-center flex flex-col ml-14" >
                    <h4 className='text-sky-600 text-3xl font-extrabold mb-3' >Results</h4>

                    {   (q==='') 
                        && <div className = "flex flex-col justify-center items-center">
                                <img src={searchMovieIcon} alt='search ' className='w-72' />
                                <h1 className='font-extrabold text-3xl' >Search a movie</h1>
                            </div>
                    }
                    {   (q!=='' && moviesFiltered.length ===0) 
                        && <div className = "flex flex-col justify-center items-center">
                                <img src={notFound} alt='search ' className='w-72' />
                                <h1 className='font-extrabold text-3xl text-red-500' >Movie Not Found</h1>
                            </div>
                    }
                    <div className='flex flex-wrap' >
                        {
                            moviesFiltered.map(movie => (
                                <MovieCard
                                key={movie.id}
                                {...movie} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

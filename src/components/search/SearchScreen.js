import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { movies } from '../../data/movies';
import { useForm } from '../hooks/useForm';
import { MovieCard } from '../movies/MovieCard';
import { getMoviesByName } from '../selectors/getMoviesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    
    const {q = ''} = queryString.parse(location.search);
    const initialForm = {
        //name del input
        searchText: q
    }
    const [formValues, handleInputChange, reset] = useForm(initialForm);
    
    const {searchText} = formValues;

    const moviesFiltered = useMemo(() => 
         getMoviesByName(q), [q]);
    
    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className = "row" >
                <div className = "col-5" >
                    <h4>Search Form</h4>

                    <hr/>
                    <form onSubmit = {handleSearch} >
                        <input type = "text"
                        placeholder = "Buscar pelicula"
                        className = "form-control"
                        name = "searchText"
                        value = {searchText}
                        onChange = {handleInputChange}
                        autoComplete = "off" />
                    </form>

                    <button type = "submit"
                    className = "btn m-1 btn-block btn-outline-primary"
                     >
                        Buscar...
                    </button>
                    
                </div>

                <div className = "col-7" >
                    <h4>Resultados</h4>

                    {   (q==='') 
                        && <div className = "alert alert-info">
                            Buscar pelicula
                        </div>
                    }
                    {   (q!=='' && moviesFiltered.length ===0) 
                        && <div className = "alert alert-danger">
                            No se encontro {q}
                        </div>
                    }
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
    )
}

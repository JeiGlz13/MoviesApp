import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getMovieById } from '../selectors/getMovieById';

export const MoviesScreen = ({history}) => {
    const {movieId} = useParams();

    const movie = useMemo(() => getMovieById(movieId), [movieId]);
     
    if(!movie){
        return <Redirect to="/"/>;
    }

    const {name, Genre, Director, Year, Cast} = movie;

  const handleReturn = ()=>{
      if(history.length <=2){
          history.push('/');
      }else{
        history.goBack();
      }
       
  }

    return (
        <div className ="row mt-5">
            <div className = "col-4">
                <img src={`../assets/movies/${movieId}.jpg`}
                className = "img-thumbnail animate__animated animate__fadeIn"
                alt = {name} />
            </div>

            <div className = "col-8 animate__animated animate__fadeInUp">
                <h3>
                    {name}
                </h3>
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item">
                        <b>Director: {Director}</b>
                    </li>
                    <li className = "list-group-item">
                        <b>Genre: {Genre}</b>
                    </li>
                    <li className = "list-group-item">
                        <b>Release: {Year}</b>
                    </li>
                </ul>

                <h5>Cast</h5>
                <p>{Cast}</p>

                <button className = "btn btn-outline-info"
                onClick = {handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}

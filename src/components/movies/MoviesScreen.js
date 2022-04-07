import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getMovieById } from '../selectors/getMovieById';

export const MoviesScreen = ({history}) => {
    const {movieId} = useParams();

    const movie = useMemo(() => getMovieById(movieId), [movieId]);
     
    if(!movie){
        return <Redirect to="/"/>;
    }

    const {name, Genre, Director, Year, Cast, Summary} = movie;

  const handleReturn = ()=>{
      if(history.length <=2){
          history.push('/');
      }else{
        history.goBack();
      }
       
  }

    return (
        <div>
            <div className="w-full min-h-screen bg-blue-100 -mt-14 flex items-center  lg:p-20 overflow-hidden relative">
                <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="mb-10 lg:mb-15">
                           <h1 className='animate__animated animate__fadeInLeft text-sky-600 text-3xl font-extrabold' >
                                {Genre}
                           </h1>
                        </div>
                        <div className="mb-10 md:mb-15 text-gray-400 font-light">
                            <h1 className=" animate__animated animate__fadeInLeft font-black text-left uppercase text-2xl lg:text-4xl text-yellow-500 mb-2">
                                {name}
                            </h1>
                            <h2 className=' animate__animated animate__fadeInLeft text-lg text-left font-semibold' >
                                Release {Year}
                            </h2>

                            <p className='text-gray-800 text-lg mt-2 font-medium animate__animated animate__fadeIn'>
                                {Summary}
                            </p>

                            <p className='text-gray-600 font-semibold mt-3 text-lg text-left animate__animated animate__fadeIn' >
                                <b className='text-sky-600' >Director:</b> {Director}
                            </p>
                            <p className='text-gray-600 font-semibold mt-1 text-lg text-left animate__animated animate__fadeIn' >
                                <b className='text-sky-600' >Cast:</b> {Cast}
                            </p>
                        </div>

                        <div className="mb-20 md:mb-0 animate__animated animate__fadeIn">
                            <button onClick = {handleReturn}
                             className="text-lg outline-none focus:outline-none transform transition-all hover:scale-110
                             font-bold text-yellow-500 hover:text-yellow-600">
                                <i className="fa-solid fa-arrow-left mr-2"></i>
                                Go Back
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 text-center flex justify-center rounded-lg">
                        <img src={`../assets/movies/${movieId}.jpg`}
                        className = 'w-72 rounded-lg animate__animated animate__fadeInRight' alt='Poster' />
                    </div>
                </div>
            </div>
        </div>
    )
}

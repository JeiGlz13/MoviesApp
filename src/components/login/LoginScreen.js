import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

import movieVector from '../../assets/CinemaVector.jpg';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Jeisson'
            }
        });
        navigate(lastPath,{
            replace: true
        });
    }

    console.log('Hola mundo')

    return (
        // <div className = "container mt-5">
        //     <h1>Login</h1>
        //     <hr/>
        //     <button className = "btn btn-primary"
        //     onClick = {handleLogin}>
        //         Login
        //     </button>
        // </div>

        <div className="bg-white font-montserrat min-h-screen flex items-center">
 
            <div className="w-full mx-auto px-6 md:px-8 lg:px-12 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-2/5 flex flex-col items-center md:items-start mt-12 md:mt-0 mb-8 md:mb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl leading-none mb-4">
                        <strong className="font-black">Movies App</strong>
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-xl mt-4 mb-4 md:mb-12 text-center md:text-left">
                        Some of the best war and gangster movies of all times
                    </p>
                    <button onClick={handleLogin} 
                    type='button' 
                    className="font-semibold text-base sm:text-lg bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-10 rounded-full">
                        Let's Start
                    </button>
                </div>
                <div className="w-11/12 sm:w-8/12 md:w-3/5">
                    <img src={movieVector} alt="movie" 
                    className="w-full" />
                </div>
            </div>
        </div>
    )
}

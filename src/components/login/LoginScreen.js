import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

import movieVector from '../../assets/CinemaVector.jpg';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);

    const handleLogin = ()=>{
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Jeisson'
            }
        });
        history.replace(lastPath);
    }

    return (
        // <div className = "container mt-5">
        //     <h1>Login</h1>
        //     <hr/>
        //     <button className = "btn btn-primary"
        //     onClick = {handleLogin}>
        //         Login
        //     </button>
        // </div>

        <div className="bg-white font-montserrat">
 
            <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center mt-16">
                <div className="sm:w-2/5 flex flex-col items-start mt-12 sm:mt-0">
                    <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">Movies App</strong></h1>
                    <p className="lg:text-xl mt-4 mb-4 sm:mb-12">Some of the best war and gangster movies of all times</p>
                    <button onClick={handleLogin} 
                    type='button' 
                    className="font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-10 rounded-full">
                        Let's Start
                    </button>
                </div>
                <div className="sm:w-3/5">
                    <img src={movieVector} alt="movie" 
                    className="w-full" />
                </div>
            </div>
        </div>
    )
}

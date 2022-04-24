import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigationLinks } from '../../data/navigationLinks';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import logoMovie from '../../assets/RedCarpetMovie.png';

export const NavBar = () => {

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = ()=>{
        dispatch({
            type: types.logout
        });
        navigate('/login');
    }
    
    return (
        <nav className="bg-neutral-800 shadow shadow-gray-300 w-full py-1 fixed top-0 z-50">
            <div className="mx-2 md:px-4 flex items-center justify-between ">
                <div className="text-indigo-500 order-1">
                    <Link 
                    to="/">
                        <img src= {logoMovie} alt='movies'
                            className='ml-2 w-[3.5rem] xs:w-16 md:w-[4.25rem] ' />
                    </Link>
                </div>

                <div className="text-gray-200  order-2">
                    <ul className="flex font-semibold justify-between">
                        {
                            navigationLinks.map(({to, label, id}) => (
                                <li key={id} className='mx-2 xs:mx-4 md:mx-8 text-sm xs:text-base transition-all duration-150 hover:scale-110 ' >
                                    <NavLink 
                                    className={(isActive)=>isActive?"hover:text-indigo-300":"text-indigo-400"}
                                    to = {to} >
                                        {label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="order-3">
                    <button onClick ={handleLogout} 
                        className="transition-all duration-200 sm:mr-4 px-3 sm:px-4 py-1 sm:py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-md xs:rounded-xl flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right-from-bracket text-md"></i>
                        <span>Exit</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
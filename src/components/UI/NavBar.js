import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { navigationLinks } from '../../data/navigationLinks';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import logoMovie from '../../assets/RedCarpetMovie.png';

export const NavBar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = ()=>{
        history.replace('/login');
        dispatch({
            type: types.logout
        });
    }
    
    return (
        <nav className="bg-neutral-800 shadow shadow-gray-300 w-full py-1 fixed top-0 z-50">
            <div className="mx-2 md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                <div className="text-indigo-500 order-1">
                    <Link 
                    to="/">
                        <img src= {logoMovie} alt='movies'
                            className='ml-2 w-20 ' />
                    </Link>
                </div>

                <div className="text-gray-200 w-full md:w-auto order-2">
                    <ul className="flex font-semibold justify-between">
                        {
                            navigationLinks.map(({to, label, id}) => (
                                <li key={id} className='mx-8  transition-all duration-150 hover:scale-110 ' >
                                    <NavLink activeClassName = "text-indigo-400"
                                    className="hover:text-indigo-300   "
                                    exact to = {to} >
                                        {label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="order-3">
                    <button onClick ={handleLogout} 
                        className="transition-all duration-200 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                        <i className="fa-solid fa-arrow-right-from-bracket text-lg"></i>
                        <span>Exit</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}
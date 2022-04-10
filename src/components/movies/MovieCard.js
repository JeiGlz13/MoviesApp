import React from 'react';
import {
    Link
  } from "react-router-dom";

export const MovieCard = ({id, name, Director, Year, Cast}) => {
    return (
        <div className="p-0 mx-2 mt-8 mb-8 items-center flex flex-wrap cardShadow rounded-3xl">
            <div className=" ml-auto mr-4">
                <img alt="..." className="rounded-lg shadow-lg h-60 xs:h-72 md:h-64 lg:h-80 " 
                    src = {`./assets/movies/${id}.jpg`}/>
            </div>

            <div className="w-44 xs:w-60 md:w-48 lg:w-56 xl:w-72 py-0 pr-4">
                    <h3 className="text-base xs:text-lg lg:text-xl font-semibold mb-1">{name}</h3>

                    <p className="text-xs sm:text-sm lg:text-md text-gray-500 font-semibold mb-2">
                        Release: {Year}
                    </p>
                    <ul className="list-none mt-1">
                        <li className="py-1">
                            <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold  py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                        <i className="fa-solid fa-clapperboard text-xs sm:text-sm lg:text-md"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600 text-xs sm:text-sm lg:text-md">
                                        <strong>Director:</strong> {Director}
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                        <i className="fa-solid fa-user text-xs sm:text-sm lg:text-md"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600 text-xs sm:text-sm lg:text-md">
                                        <strong>Cast:</strong>  {Cast}
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className='mt-4' >
                        <Link to={`./movie/${id}`}
                        className = 'px-3 md:px-4 py-1 md:py-2 text-base lg:text-md bg-red-500 text-white rounded-lg' >
                                Mas...
                        </Link>
                    </div>
            </div>
        </div>
    )
}

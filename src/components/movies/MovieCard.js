import React from 'react';
import {
    Link
  } from "react-router-dom";

export const MovieCard = ({id, name, Director, Year, Cast}) => {
    return (
        <div className="p-0 mt-16 mx-5 items-center flex flex-wrap cardShadow rounded-3xl">
            <div className=" ml-auto mr-4">
                <img alt="..." className="rounded-lg shadow-lg h-80 " 
                    src = {`./assets/movies/${id}.jpg`}/>
            </div>

            <div className="w-72 py-0 pr-4">
                    <h3 className="text-xl font-semibold mb-1">{name}</h3>

                    <p className="text-md text-gray-500 font-semibold mb-4">
                        Release: {Year}
                    </p>
                    <ul className="list-none mt-2">
                        <li className="py-1">
                            <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold  py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                        <i className="fa-solid fa-clapperboard text-md"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600 text-md">
                                        <strong>Director:</strong> {Director}
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-1">
                            <div className="flex items-center">
                                <div>
                                    <span className="text-xs font-semibold py-2 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                        <i className="fa-solid fa-user text-md"></i>
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600 text-md">
                                        <strong>Cast:</strong>  {Cast}
                                    </h4>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className='mt-6' >
                        <Link to={`./movie/${id}`}
                        className = 'px-4 py-2 bg-red-500 text-white rounded-lg' >
                                Mas...
                        </Link>
                    </div>
            </div>
        </div>
    )
}

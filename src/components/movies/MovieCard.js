import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const MovieCard = ({id, name, Genre, Director, Year, Cast}) => {
    return (
        <div className = "card ms-3" style = {{maxWidth: 540}}>

            <div className = "row no-gutters">
                <div className = "col-md-4">
                    <img src = {`./assets/movies/${id}.jpg`} className = "card-img" alt = {name} />
                </div>
                <div className = "col-md-8">
                    <div className = "card-body">
                        <h5 className = "card-title">
                         {name }
                        </h5>
                        <p className = "card-text">
                            Director: {Director}
                        </p>

                        {
                            (Director !== Cast)
                            && <p className = "card-text"> Cast:  {Cast}</p>
                        }

                        <p className= "card-text">
                            <small className = "text-muted">Release: {Year}</small>
                        </p>

                        <Link to={`./movie/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

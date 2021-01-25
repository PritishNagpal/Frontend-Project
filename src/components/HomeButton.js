import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const Homebutton = () => {
    

    return (
    <div className="header"> 
        <div className="btn-div">
            <Link className="btn btn-white btn-animated" to="/form">New Employe</Link>
        </div>
    </div>
    )
}

export default Homebutton;
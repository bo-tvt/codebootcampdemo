import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Herring">Richard Herring Question Generator</Link>
                </li>                
                <li>
                    <Link to="/Roi">Susikoira Roi Punchline Generator</Link>
                </li>

            </ul>
        </div>
    );
} 

                /*
                <li>
                    <Link to="/">Home</Link>
                </li> 404 GOES HERE */
                
import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
} 
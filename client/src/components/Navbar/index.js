import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

let Navbar = () => {
return(
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand brand-title" to="#">
                Google Book Search
            </Link>
                <button
                className="navbar toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li classname="nav-item">
                                <NavLink className="nav-link heading-title" to="/search">
                                    Search
                                </NavLink>
                            </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link heading-title" to="/saved">
                                        Saved
                                    </NavLink>
                                </li>
                        </ul>
                    </div>
        </nav>
    </React.Fragment>
);
};

export default Navbar;
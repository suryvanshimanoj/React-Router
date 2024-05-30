import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="p-5 bg-primary text-white text-center">
                <h1>Manoj Singh</h1>
                <p>Front End Developer</p>
            </div>

            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/">HomeUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutUs">AboutUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactUs">ContactUs</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
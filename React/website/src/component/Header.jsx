import React from 'react'
import {Outlet, Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <div class="container-fluid p-5 bg-primary text-white text-center">
                <h1>Header</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/index">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
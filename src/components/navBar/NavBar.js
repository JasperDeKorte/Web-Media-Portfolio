import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <NavLink to="Web-Media-Portfolio">
                <h1>Home</h1>
            </NavLink>
        </div>
    )
}

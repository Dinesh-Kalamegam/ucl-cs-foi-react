import React from 'react'
import {NavLink} from 'react-router-dom'
import './App.css'

function Navbar(){
    return(
        // This navbar uses the Router component in App js that it is wrapped around 
        <div>
            <ul className="nav-bar">
                <li className="nav-item">UCL Computer Science Module Marks</li>
                <li><NavLink to={process.env.PUBLIC_URL+`/`} activeClassName="active"> Home </NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL+`/level6`} activeClassName="active"> Level 6 </NavLink></li>
                <li><NavLink to={process.env.PUBLIC_URL+`/level7`} activeClassName="active"> Level 7 </NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
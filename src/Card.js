import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
function Card({module_code, module_name}) {
    return (
        <div className="card" key={module_code}>
        <Link className="link" to={process.env.PUBLIC_URL + "/" + module_code}>

            <div className="card-header">
                <h2> {module_code} </h2>
            </div>

            <div className="card-main">
                <h2 className="main-description"> {module_name} </h2>
            </div>
        </Link>
    </div>
    )
}

export default Card

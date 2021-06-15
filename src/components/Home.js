import React, { } from 'react'
import {Link} from 'react-router-dom'
import informed from '../images/undraw_informed_decision_p2lh.svg'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <img src={informed} alt="" className="image-container-img"></img>
                <div className="hero-left">
                    <h1 className="hero-text">Pick the right modules</h1>
                    <h3 className="hero-subtext"> UCL CS Module Data available in one place</h3>
                    <div className="button-row">
                        <Link className="home-button focus-button" to={process.env.PUBLIC_URL+"/level6"}>Level 6 Modules </Link>
                        <Link className="home-button focus-button" to={process.env.PUBLIC_URL+"/level7"}>Level 7 Modules  </Link>
                        <a className="home-button" href="https://github.com/Dinesh-Kalamegam/ucl-cs-foi-react">See GitHub Repo  </a>
                        <a className="home-button" href="https://www.whatdotheyknow.com/request/ucl_meng_computer_science_module_2#incoming-1463166">See Source of Data </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home
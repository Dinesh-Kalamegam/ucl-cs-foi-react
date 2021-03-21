import React, { } from 'react'
import {Link} from 'react-router-dom'
// import { ExternalLink } from 'react-external-link'
import informed from './images/undraw_informed_decision_p2lh.svg'
import './Home.css'
// import GitHubIcon from '@material-ui/icons/GitHub';

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <img src={informed} alt="" className="image-container-img"></img>
                <div className="hero-left">
                    <h1 className="hero-text">Pick the right modules</h1>
                    <h3 className="hero-subtext"> UCL CS Module Data available in one place</h3>
                    <div className="button-row">
                        {/* <a className="home-button focus-button" href={process.env.PUBLIC_URL+"/level6"}>Level 6 Modules </a> */}
                        {/* <a className="home-button focus-button" href={process.env.PUBLIC_URL+"/level7"}>Level 7 Modules </a> */}
                        <Link className="home-button focus-button" to={process.env.PUBLIC_URL+"/level6"}><a >Level 6 Modules </a> </Link>
                        <Link className="home-button focus-button" to={process.env.PUBLIC_URL+"/level7"}><a >Level 7 Modules </a> </Link>
                        <a className="home-button" href="https://github.com/Dinesh-Kalamegam/ucl-cs-foi-react">See GitHub Repo  </a>
                        <a className="home-button" href="https://www.whatdotheyknow.com/request/ucl_meng_computer_science_module_2#incoming-1463166">See Source of Data </a>
                    </div>
                </div>
            </div>

            {/* <div className="text-container">
                
                <h2>Introduction</h2>
                <p>When choosing your modules one important factor is how are the marks like for a particular module. If you are trying to optimise your grade then picking a low average mark module is not going to be in your best interest. So this website helps you make an informed decision.</p>

                <br />
                <p>Level 6 is 3rd Year modules and Level 7 are 4th year modules just click which level you want to see the list of modules and a comparison of all the mean marks for that level. Click a module card to see how the Mean mark as well as the percentiles changed from 2015/6-2018/9</p>
                
                <br />
                <p>Now given this information obviously don't just pick the modules with the highest marks also think about</p>
                
                <ul>
                    <li>Term 1 / Term 2 Balance</li>
                    <li>How coursework heavy is it</li>
                    <li>Is the topic something you are genuinely interested in </li>
                </ul>

                <h2> About the data </h2>
                <ul>
                    <li>Original data comes from my FOI from 2019 which can be found   <ExternalLink href="https://www.whatdotheyknow.com/request/ucl_meng_computer_science_module_2#incoming-1463166"> here</ExternalLink></li>
                    <li>I manually converted the files into csvs and added the module codes in these can be found alongside all the code for this website and JSON files of this data at this github repo <ExternalLink href="https://github.com/Dinesh-Kalamegam/ucl-cs-foi-react"> <GitHubIcon></GitHubIcon></ExternalLink> </li>
                </ul>
            </div> */}
        </div>

    )
}

export default Home
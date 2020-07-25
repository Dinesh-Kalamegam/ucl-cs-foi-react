import React from 'react'
import {Route,Link} from 'react-router-dom'
import './App.css'

function Level(props) {
    const data2018 = props.data[3]
    return (
        <div className="level">
            {data2018.filter(x => x.Level === props.level).map(x => (
                <div className="card" key={x["Module Code"]}>
                    
                    <div className="card-header">
                        <h2> {x["Module Code"]} </h2>
                    </div>

                    <div className="card-main">
                        <h2 className="main-description"> {x["Module Name"]} </h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Level
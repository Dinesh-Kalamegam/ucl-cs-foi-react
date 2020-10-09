import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BarChart from './BarChart'

function compare(a, b) {
    if (a.Mean < b.Mean) {
        return -1;
    }
    if (a.Mean > b.Mean) {
        return 1;
    }
    return 0;
}


function Level(props) {
    const data2018 = props.data[3]
    const bar_text = "Comparison of 2018/9 mean marks for Level " + props.level.toString()
    return (
        <div className="level">
            <BarChart text ={bar_text} arr={data2018.filter(x => x.Level === props.level).sort(compare)}></BarChart>
            {data2018.filter(x => x.Level === props.level).map(x => (
                <div className="card" key={x["Module Code"]}>
                    <Link to={process.env.PUBLIC_URL + "/" + x["Module Code"]}>

                        <div className="card-header">
                            <h2> {x["Module Code"]} </h2>
                        </div>

                        <div className="card-main">
                            <h2 className="main-description"> {x["Module Name"]} </h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Level
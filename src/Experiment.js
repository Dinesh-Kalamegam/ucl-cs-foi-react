import React from 'react'
import './App.css';

let data2018 = require("./cs-module-data/data_2018_9.json")
function Experiment() {
    return (
        <div>
            <div className="experiment">
                {data2018.filter(x => x.Level === 6).map(x => (
                    <div className="module-box" key={x["Module Code"]}> <h2> {x["Module Code"]}</h2> </div>
                ))}
            </div>

            <div className="experiment">
                {data2018.filter(x => x.Level === 7).map(x => (
                    <div className="module-box" key={x["Module Code"]}> <h2> {x["Module Code"]}</h2> </div>
                ))}
            </div>


        </div>
    )
}

export default Experiment 
// import React, { useState, useEffect } from 'react'
// import {Bar} from 'react-chartjs-2'

// let data2018 = require("./cs-module-data/data_2018_9.json") 

// function TestLine(props) {
//     let data = data2018.filter(x => x.Level ===props.Level )
//     const [chartData,setChartData] = useState({})
//     const chart= () => {
//         setChartData({
//             labels: data.map(x => x["Module Code"]),
//             datasets: [
//                 {
//                     label:"Mean",
//                     data: data.map(x => x['Mean']),
//                     backgroundColor:"#1900FD",
//                 },
//                 {
//                     label:"5th",
//                     data: data.map(x => x['5th']),
//                     backgroundColor:"#1155F8",
//                 },

//                 {
//                     label:"25th",
//                     data: data.map(x => x['25th']),
//                     backgroundColor:"#08AAF3",
//                 },

//                 {
//                     label:"75th",
//                     data: data.map(x => x['75th']),
//                     backgroundColor:"#00FFEE",
//                 },
//             ]
//         })
//     }

//     useEffect( () => {chart()},[]);

//     return(
//         <div>
//             <Bar data={chartData} option={{
//                 responsive:true
//             }} />
//         </div>
//     )
// }

// export default TestLineimport React, { useState, useEffect } from 'react'
// import {Bar} from 'react-chartjs-2'

// let data2018 = require("./cs-module-data/data_2018_9.json") 

// function TestLine(props) {
//     let data = data2018.filter(x => x.Level ===props.Level )
//     const [chartData,setChartData] = useState({})
//     const chart= () => {
//         setChartData({
//             labels: data.map(x => x["Module Code"]),
//             datasets: [
//                 {
//                     label:"Mean",
//                     data: data.map(x => x['Mean']),
//                     backgroundColor:"#1900FD",
//                 },
//                 {
//                     label:"5th",
//                     data: data.map(x => x['5th']),
//                     backgroundColor:"#1155F8",
//                 },

//                 {
//                     label:"25th",
//                     data: data.map(x => x['25th']),
//                     backgroundColor:"#08AAF3",
//                 },

//                 {
//                     label:"75th",
//                     data: data.map(x => x['75th']),
//                     backgroundColor:"#00FFEE",
//                 },
//             ]
//         })
//     }

//     useEffect( () => {chart()},[]);

//     return(
//         <div>
//             <Bar data={chartData} option={{
//                 responsive:true
//             }} />
//         </div>
//     )
// }

// export default TestLine


/*

import React from 'react'
import TestLine from './TestLine'
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
*/
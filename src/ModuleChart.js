import React from 'react'
import { Line } from 'react-chartjs-2'
import './App.css'
import './ModuleChart.css'

function ModuleChart(props) {
    const years = [2015, 2016, 2017, 2018]
    const means = {}
    const percentile_5 = {}
    const percentile_25 = {}
    const percentile_75 = {}
    const percentile_95 = {}
    let module_name = ""

    for (const [i, element] of props.data.entries()) {
        let modulecodes = element.map(x => x["Module Code"])

        if (modulecodes.includes(props.modcode)) {
            means[i] = element[modulecodes.indexOf(props.modcode)]['Mean']
            percentile_5[i] = element[modulecodes.indexOf(props.modcode)]['5th']
            percentile_25[i] = element[modulecodes.indexOf(props.modcode)]['25th']
            percentile_75[i] = element[modulecodes.indexOf(props.modcode)]['75th']
            percentile_95[i] = element[modulecodes.indexOf(props.modcode)]['95th']
            module_name = element[modulecodes.indexOf(props.modcode)]["Module Name"]
        }
        else {
            means[i] = 0
            percentile_5[i] = 0
            percentile_25[i] = 0
            percentile_75[i] = 0
            percentile_95[i] = 0
        }
    }

    const fill_val = false
    const chart_data = {
        labels: years,
        datasets: [
            {
                label: "Mean",
                data: Object.values(means),
                fill: fill_val,
                borderColor: "white",

            },

            {
                label: "5th",
                data: Object.values(percentile_5),
                fill: fill_val,
                borderColor: "#ff99ad",
            },
            {
                label: "25th",
                data: Object.values(percentile_25),
                fill: fill_val,
                borderColor: "#f9fc55",
            },
            {
                label: "75th",
                data: Object.values(percentile_75),
                fill: fill_val,
                borderColor: "#87e7fd",
            },
            {
                label: "95th",
                data: Object.values(percentile_95),
                fill: fill_val,
                borderColor: "#8afd86",
            }
        ],
    }

    return (
        <div className="module-chart-box">
            <div className="chart-info-area">
                <h1 className="chart-title">
                    {props.modcode + " : " + module_name} <br></br> {"Percentiles over 2015/6-2018/9"} 
                </h1>
            </div>

            <Line
                data={chart_data}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontSize:12,
                            fontColor: "white",
                            padding: 30,
                        },


                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Year',
                                fontSize: 15,
                                fontColor: "white",
                            },
                            ticks: {
                                fontColor: "white"
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Mark',
                                fontSize: 15,
                                fontColor: "white"
                            },
                            ticks: {
                                fontColor: "white"
                            }
                        }]
                    },

                }
                }


            >
            </Line>

            {/* <div className="legend">
                    <div className="legend-item perc_5th">5th Percentile</div>
                    <div className="legend-item perc_25th">25th Percentile</div>
                    <div className="legend-item perc_mean">Mean Mark</div>
                    <div className="legend-item perc_75th">75th Percentile</div>
                    <div className="legend-item perc_95th">95th Percentile</div>
                </div> */}
        </div>
    )

}


export default ModuleChart
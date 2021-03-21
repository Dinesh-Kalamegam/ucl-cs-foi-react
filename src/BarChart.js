import React, { } from 'react'
import {HorizontalBar} from 'react-chartjs-2'
import './BarChart.css'

function BarChart(props) {
    const data = {
        labels: props.arr.map(x => x["Module Code"]),
        datasets: [
            {
                label: props.text,
                data: props.arr.map(x => x["Mean"]),
                backgroundColor: "#05BCE6",
            }
        ]

    }
    return (
        <HorizontalBar data={data} className="barchart"
        options={{
            // maintainAspectRatio:false,
            height:"20%",
            title:{
                fontColor:"white",
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Module',
                        fontSize: 15,
                        fontColor:"white"
                    },
                    ticks:{
                        fontColor:"white"
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Mean Mark',
                        fontSize: 15,
                        fontColor:"white"
                    },
                    ticks:{
                        fontColor:"white"
                    }
                }]
            },

        }
        }
        
        />
    )
}


export default BarChart
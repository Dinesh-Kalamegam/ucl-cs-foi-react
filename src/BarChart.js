import React, { } from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart(props) {
    const data = {
        labels: props.arr.map(x => x["Module Code"]),
        datasets: [
            {
                label: props.text,
                data: props.arr.map(x => x["Mean"]),
                backgroundColor: "skyblue"
            }
        ]

    }
    return (<Bar data={data} />)
}


export default BarChart
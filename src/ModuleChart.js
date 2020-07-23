import React from 'react'
import {Line} from 'react-chartjs-2'

function ModuleChart(props) {
    const years = [2015, 2016, 2017, 2018]
    const means = {}
    const percentile_5 = {}
    const percentile_25 = {}
    const percentile_75 = {}
    const percentile_95 = {}

    for (const [i,element] of props.data.entries()){


        let modulecodes = element.map(x => x["Module Code"])

        if (modulecodes.includes(props.modcode)){
            console.log(element)
            means[i] = element[modulecodes.indexOf(props.modcode)]['Mean']
            percentile_5[i] = element[modulecodes.indexOf(props.modcode)]['5th']
            percentile_25[i] = element[modulecodes.indexOf(props.modcode)]['25th']
            percentile_75[i] = element[modulecodes.indexOf(props.modcode)]['75th']
            percentile_95[i] = element[modulecodes.indexOf(props.modcode)]['95th']
        }
        else{
            means[i] = 0
            percentile_5[i] = 0
            percentile_25[i] = 0
            percentile_75[i] = 0
            percentile_95[i] = 0
        }
    }
    
    const fill_val = false
    const chart_data ={
        labels: years,
        datasets:[
            {
                label: "Mean",
                data : Object.values(means),
                fill:fill_val,
                
            },

            {
                label: "5th",
                data : Object.values(percentile_5),
                fill:fill_val,
            },
            {
                label: "25th",
                data : Object.values(percentile_25),
                fill:fill_val,
            },
            {
                label: "75th",
                data : Object.values(percentile_75),
                fill:fill_val,
            },
            {
                label: "95th",
                data : Object.values(percentile_95),
                fill:fill_val,
            }
    ],

    }

    return <Line data={chart_data}> </Line>

}


export default ModuleChart
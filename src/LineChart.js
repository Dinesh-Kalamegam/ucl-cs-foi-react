import React, {} from 'react'
import {Line} from 'react-chartjs-2'

function BarChart(props){
    console.log(props.arr.map(x => x["Module Code"]))
    const data = { 
            labels: props.arr.map(x => x["Module Code"]),
            datasets: [
                {
                    label: "Something",
                    data: props.arr.map(x => x["Mean"])
                }
            ]
        }

        
        return(<Line data={data}/>)
    }


export default BarChart
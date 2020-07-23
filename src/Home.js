import React, { } from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'

import ModuleChart from './ModuleChart'
function Home(props) {
    const [data2015,data2016,data2017,data2018] = props.data


    return (
        <div>
            <h1> Home </h1>
            <BarChart arr={data2015} > </BarChart>    
            <BarChart arr={data2016} > </BarChart>  
            <BarChart arr={data2017}> </BarChart>  
            <LineChart arr={data2018} > </LineChart>  

            {data2018.map(x =><ModuleChart data={props.data} modcode={x['Module Code']}></ModuleChart> )}
            {/* <ModuleChart data={props.data} modcode="COMP0019"></ModuleChart> */}
        

        </div>
    )
}

export default Home
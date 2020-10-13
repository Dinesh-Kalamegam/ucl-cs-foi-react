import React, { } from 'react'
import BarChart from './BarChart'
import informed from './images/undraw_informed_decision_p2lh.svg'
import './Home.css'
function Home(props) {
    const [data2015,data2016,data2017,data2018] = props.data


    return (
        <div className="home">
            {/* <img src={informed} alt="" className="home-row-1-img"></img> */}
            <h1>Some Random Home Content</h1>
        </div>

            /* <BarChart text="Comparison of means for year 2015/6" arr={data2015} > </BarChart>    
            <BarChart text="Comparison of means for year 2016/7" arr={data2016} > </BarChart>  
            <BarChart text="Comparison of means for year 2017/8" arr={data2017}> </BarChart>  
            <BarChart text="Comparison of means for year 2018/9" arr={data2018} > </BarChart>   */

        // </div>
    )
}

export default Home
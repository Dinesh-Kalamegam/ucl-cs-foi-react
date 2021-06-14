import React from 'react'
import './App.css'
import './Level.css'
import BarChart from './BarChart'
import Card from './Card'
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
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 600;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    
    const data2018 = props.data[3]
    const bar_text = "Comparison of 2018/9 mean marks for Level " + props.level.toString()
    return (
        <div className="level-container">
            {width > breakpoint ? <BarChart className="bar-level" text={bar_text} arr={data2018.filter(x => x.Level === props.level).sort(compare)}></BarChart> : <React.Fragment></React.Fragment>}
            <div className="level">
                {data2018.filter(x => x.Level === props.level).map(x => (
                    <Card key={x["Module Code"]} module_code={x["Module Code"]} module_name={x["Module Name"]} />
                ))}
            </div>
        </div>
    )
}

export default Level
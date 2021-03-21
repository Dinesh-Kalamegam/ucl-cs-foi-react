import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
// import Navbar from './NavBar'
import Navbar2 from './NavBar2'
import Home from './Home'
import Level from './Level'
import ModuleChart from './ModuleChart';

function App() {
  let data2015 = require("./cs-module-data/data_2015_6.json")
  let data2016 = require("./cs-module-data/data_2016_7.json")
  let data2017 = require("./cs-module-data/data_2017_8.json")
  let data2018 = require("./cs-module-data/data_2018_9.json")
  const moduledata = [data2015, data2016, data2017, data2018]

  let modulecodes = data2018.map(x => x["Module Code"])

  return (
    <div className="App">
      <Router>
        <Navbar2/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"}><Home data={moduledata} />  </Route>
          <Route exact path={process.env.PUBLIC_URL+"/level6"}><Level level={6} data={moduledata} />  </Route>
          <Route exact path={process.env.PUBLIC_URL+"/level7"}><Level level={7} data={moduledata} />  </Route>

          {
            modulecodes.map(x => {
              let mod_path = "/";
              mod_path = mod_path.concat(x);
              return <Route exact path={process.env.PUBLIC_URL+mod_path} key={x}> <ModuleChart className="module_chart" data={moduledata} modcode={x} /> </Route>
            })
          }

        </Switch>
      </Router>
    </div>
  );
}

export default App;

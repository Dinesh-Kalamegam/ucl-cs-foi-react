import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './NavBar'
import Home from './Home'
import Level from './Level'

function App() {
  let data2015 = require("./cs-module-data/data_2015_6.json") 
  let data2016 = require("./cs-module-data/data_2016_7.json") 
  let data2017 = require("./cs-module-data/data_2017_8.json") 
  let data2018 = require("./cs-module-data/data_2018_9.json") 
  const moduledata = [data2015,data2016,data2017,data2018]

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/"><Home data={moduledata} />  </Route>
          <Route exact path="/level6"><Level level={6} data={moduledata}/>  </Route>
          <Route exact path="/level7"><Level level={7} data={moduledata}/>  </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Homepage from "./views/homepage"
import Weekly from "./views/weekly"
import WeeklyBattle from "./views/weeklyBattle"
import Popular from "./views/popular"
import PopularBattle from "./views/popularBattle"
import Favorites from "./views/favorites"


export default class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div>
          <h1>Moovice</h1>
        <nav> 
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/weekly">Weekly</Link></li>
            <li><Link to="/weeklyBattle">WeeklyBattle</Link></li>
            <li><Link to="/popular">Popular</Link></li>
            <li><Link to="/popularBattle">PopularBattle</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </nav>

        <Switch> 
          <Route exact path="/" component={Homepage}/>
          <Route  path="/weekly" component={Weekly}/>
          <Route  path="/weeklyBattle" component={WeeklyBattle}/>
          <Route  path="/popular" component={Popular}/>
          <Route  path="/popularBattle" component={PopularBattle}/>                    
          <Route  path="/favorites" component={Favorites}/>
        </Switch>

      </div>
    </BrowserRouter>
    )
  }
}



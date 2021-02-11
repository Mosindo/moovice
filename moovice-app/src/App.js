import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home"
import Weekly from "./components/Weekly"
import WeeklyBattle from "./components/WeeklyBattle"
import Popular from "./components/Popular"
import PopularBattle from "./components/PopularBattle"
import Favorites from "./components/Favorites"
import NavBar from './components/NavBar'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      tkt:"",
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/weekly" component={Weekly}/>
          <Route path="/weekly-battle" component={WeeklyBattle}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/popular-battle" component={PopularBattle}/>
          <Route path="/favorites" component={Favorites}/>
        </Switch>        
      </BrowserRouter>
    );
  }
}

export default App;
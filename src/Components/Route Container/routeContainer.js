import React from 'react';
import './routeContainer.css';
import Home from '../Home/home';
import Skills from '../skills/skills'
import { Route, Switch } from "react-router-dom";
import About from '../About/about';
import Contact from '../Contact/contact';
import Liaison from '../About/Experience/liaison';
import Vardhaman from '../About/Experience/vardhaman';
import Education from '../About/Experience/education'
class RouteContainer extends React.Component{
    render(){
        return(
            <div className = "RouteContainer">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/about" component = {About}/>
                        <Route path="/contact" component={Contact} />
                    </Switch>
            </div>
        )
    }
}

export default RouteContainer;
import React from 'react'
import './about.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Liaison from '../About/Experience/liaison';
import Vardhaman from '../About/Experience/vardhaman';
import Education from '../About/Experience/education';
import NavigationItem from '../Nav/navItem/navItem';

class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                activeTab: 'Liaison'   
        }
    }
    switchTab = (tabName) => {
        this.setState({
            activeTab: tabName
        })
    }
    render(){
        let renderComponent = <Liaison/>
        if(this.state.activeTab == 'Vardhaman'){
            renderComponent = <Vardhaman/>
        }
        else if(this.state.activeTab == 'Education'){
            renderComponent = <Education/>
        }
        return(
            <div className = "aboutContainer flexDirectionColumn">
               <div className = "aboutListContainer flexDirectionRow">
                    <div 
                        className = {this.state.activeTab == 'Liaison' ?  
                            'activeTab listItemContainer centerAlign' : 
                            'inActiveTab listItemContainer centerAlign' }
                        onClick = {() => this.switchTab('Liaison')}
                    >
                        <div>Liaison International</div>  
                    </div>
                    <div 
                        className = {this.state.activeTab == 'Vardhaman' ?  
                            'activeTab listItemContainer centerAlign' : 
                            'inActiveTab listItemContainer centerAlign' }
                        onClick = {() => this.switchTab('Vardhaman')}
                    >
                        <div>Vardhaman</div>
                    </div>
                    <div 
                        className = {this.state.activeTab == 'Education' ?  
                            'activeTab listItemContainer centerAlign' : 
                            'inActiveTab listItemContainer centerAlign' }
                        onClick = {() => this.switchTab('Education')}
                    >
                        <div>Education</div> 
                    </div>
                </div>  
                <div className = "activeContentContainer">
                    {renderComponent}
                </div> 
            </div>
        )
    }
}

export default About;

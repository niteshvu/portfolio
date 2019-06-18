import React from 'react'
import './nav.css'
import NavigationItem from './navItem/navItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
class Nav extends React.Component{
    render(){
        return(
            <div className = "navContainer">
                <p className = "resumeButton">
                    <FontAwesomeIcon className = "fileIcon" icon = {faFile}/>
                    <strong>Download Resume</strong>
                </p>
                <ul className = "navigationGroup">
                    <h1 className = "name">Nitesh Vuppala</h1>
                    <p>Frontend Developer</p>
                    <NavigationItem exact link = "/">Home</NavigationItem>
                    <NavigationItem exact link = "/skills">Skills</NavigationItem>
                    <NavigationItem exact link = "/about">Experience</NavigationItem>
                    <NavigationItem exact link = "/contact">Contact Me</NavigationItem>
                </ul>
            </div>
        );
    }
}

export default Nav;
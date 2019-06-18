import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons';
import './toolsHover.css';
function ToolsHover(){
    return(
        <div className = "toolsHoverContainer flexDirectionColumn">
            <FontAwesomeIcon className = "fileIcon fileIconCodeHover" icon = {faTools}/>
            <p style = {{
                textAlign: 'center',
                color: 'gray',
                fontSize: '15px',
                marginTop: '80px'
                }}>
                Tools bring us power!<br></br>
                I was lucky enough to get hands-on experince on GitHub, Jenkins and various 
                other tools during my industrial experince. Considering advantages brought by tools, I have always been up 
                in learning and exploring new tools and put them into practice.   
            </p>
        </div>
    )
}

export default ToolsHover;
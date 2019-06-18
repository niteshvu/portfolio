import React from 'react';
import './background.css'
function Background(props){
    return(
        <div className = "backgroundContainer">
            <div className = "topLeft"></div>
            <div className = "bottomRight"></div>

            {props.children}
        </div>
    );
}
export default Background;
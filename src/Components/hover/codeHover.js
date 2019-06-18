import React from 'react';
import './codeHover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function CodeHover(){
    return(
        <div className = "codeHoverContainer flexDirectionColumn">
            <FontAwesomeIcon className = "fileIcon fileIconCodeHover" icon = {faCode}/>
            <br></br>
            <div className = "progressBarContainer flexDirectionRow">
                <div className = "progressBarInnerContainer centerAlign flexDirectionColumn">
                    <CircularProgressbar
                        minValue={0}
                        maxValue={10}
                        value = {8}
                        text={`${8}/${10}`} 
                    />
                    <p>ReactJS</p>
                </div>
                <div className = "progressBarInnerContainer centerAlign flexDirectionColumn">
                    <CircularProgressbar
                        minValue={0}
                        maxValue={10}
                        value = {7}
                        text={`${7}/${10}`} 
                    />
                    <p>Angular</p>
                </div>
            </div>
            <p style = {{
                textAlign: 'center',
                color: 'gray',
                fontSize: '15px'
                }}>
                With strong knowledge in Javascript, HTML and CSS, I have managed to learn
                and understand multiple freameworks and confident about keeping myself 
                versatile to the trend in the frontend community.  
            </p>
        </div>
    )
}

export default CodeHover;
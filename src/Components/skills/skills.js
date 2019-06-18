import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import CodeHover from '../hover/codeHover';
import ToolsHover from '../hover/toolsHover';
import DesignHover from '../hover/designHover';

// import design from '../../assets/images/design.png'
// import tools from '../../assets/images/Webdevelopment.png'


function Skills(props){
    return(
        <div className = "skillsContainer">
            <div className = "imageContainer">
                <div className = " tools innerImageContainer">
                    <div className = "mainInfoContainer">
                        <FontAwesomeIcon className = "fileIcon fileIconSkills" icon = {faTools}/>
                        <br></br>
                        <h6>Tools</h6>
                        <p>Jenkins, GitHub, JIRA, Confluence, Firebase, Chrome Developer Tools</p>
                    </div>
                    <p className = "moreInfo">
                            <ToolsHover/>
                    </p>
                    <div className = "moreInfoButtonContainer">
                        <p className = "moreInfoButton">More...</p>
                    </div>
                </div>
                <div className = "code innerImageContainer">
                    <div style = {{marginTop: '45px'}} className = "mainInfoContainer">
                        <FontAwesomeIcon className = "fileIcon fileIconSkills" icon = {faCode}/>
                        <br></br>
                        <h6>Languages/Frameworks</h6>
                        <p>HTML, CSS, JavaScript, ReactJS, Angular 4 and later, ES6, Redux, RxJs, PHP, Jquery, 
                            Karma, Bootstrap, SASS, NodeJs
                        </p>
                    </div>
                    <p className = "moreInfo">
                        <CodeHover/>
                    </p>
                    <div className = "moreInfoButtonContainer">
                        <p className = "moreInfoButton">More...</p>
                    </div>
                </div>
                <div className = " design innerImageContainer">
                    <div className = "mainInfoContainer">
                     <FontAwesomeIcon className = "fileIcon fileIconSkills" icon = {faPalette}/>
                     <br></br>
                     <h6>Design</h6>
                        <p>
                            Abode Photoshop, Ligthtroom, Illustrator, Sketch, Wordpress
                        </p>
                    </div>
                    <p className = "moreInfo">
                           <DesignHover/>
                    </p>
                    <div className = "moreInfoButtonContainer">
                        <p className = "moreInfoButton">More...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;

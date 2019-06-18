import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
function Education(){
    return(
        <div>
            <br></br>
            <p><strong>Masters in Computer Science &nbsp;
            <span><FontAwesomeIcon className = "fileIcon" icon = {faGraduationCap}/></span>
            </strong>
                <p>
                    Fitchburg State University
                    <p>MA, US.<p>
                        Dec 16 - Aug 18
                    </p></p> 
                </p>
                
            </p>
            <p><strong>Bachelors in Information Technology &nbsp;
            <span><FontAwesomeIcon className = "fileIcon" icon = {faGraduationCap}/></span>
            </strong>
                <p>
                    Vardhaman College of Engineering<p>Hyderabad, India.<p>
                        Jun 12 - Apr 16
                    </p></p> 
                </p>
            </p>
        </div>
    )
}
export default Education;
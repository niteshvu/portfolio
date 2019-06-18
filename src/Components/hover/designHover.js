import React from 'react';
import './designHover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
function DesignHover(){
    return(
        <div className = "designHoverContainer flexDirectionColumn">
            <FontAwesomeIcon className = "fileIcon fileIconCodeHover" icon = {faPalette}/>
            <p style = {{
                textAlign: 'center',
                color: 'gray',
                fontSize: '15px',
                marginTop: '80px'
                }}>
                Having passion in Art, Photography and interest in Technology, I had
                always tried in integrating everything together and ended up learning 
                Photoshop to it's best. Getting into web development and freelancing
                had opened doors to a whole new world of options and yes, I love
                and appreciate design.
            </p>
        </div>
    )
}
export default DesignHover;
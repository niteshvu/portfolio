import React from 'react'
import './plate.css'
class Plate extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className = "plateContainer">
                {this.props.children}
            </div>
        )    
    }
}

export default Plate